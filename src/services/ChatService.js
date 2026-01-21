import { supabase } from '../supabaseClient';

export const chatService = {
    // Fetch active conversations
    async getConversations() {
        const { data, error } = await supabase
            .from('conversations')
            .select('*')
            .order('updated_at', { ascending: false });

        if (error) throw error;
        return data;
    },

    // Fetch messages for a specific conversation
    async getMessages(conversationId) {
        const { data, error } = await supabase
            .from('messages')
            .select('*')
            .eq('conversation_id', conversationId)
            .order('created_at', { ascending: true });

        if (error) throw error;
        return data;
    },

    // Send a message
    async sendMessage(conversationId, content, senderType = 'agent') {
        // 1. Insert message
        const { data: message, error } = await supabase
            .from('messages')
            .insert([{
                conversation_id: conversationId,
                content,
                sender_type: senderType
            }])
            .select()
            .single();

        if (error) throw error;

        // 2. Update conversation timestamp
        await supabase
            .from('conversations')
            .update({ updated_at: new Date() })
            .eq('id', conversationId);

        return message;
    },

    // Create a new conversation (Visitor starts chat)
    async createConversation(customerName, locationId) {
        const { data, error } = await supabase
            .from('conversations')
            .insert([{
                customer_name: customerName,
                location_id: locationId,
                channel: 'webchat',
                status: 'open'
            }])
            .select()
            .single();

        if (error) throw error;
        return data;
    },

    // Realtime Subscription: Listen for new messages
    subscribeToMessages(callback) {
        return supabase
            .channel('public:messages')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
                callback(payload.new);
            })
            .subscribe();
    }
};
