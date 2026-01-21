import { supabase } from '../supabaseClient';

export const reviewService = {
    // Fetch all reviews for a location
    async getReviews(locationId) {
        const { data, error } = await supabase
            .from('reviews')
            .select('*')
            .eq('location_id', locationId)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data;
    },

    // Create a new review (simulating ingestion)
    async createReview(review) {
        const { data, error } = await supabase
            .from('reviews')
            .insert([review])
            .select()
            .single();

        if (error) throw error;
        return data;
    },

    // Update review status (Workflow)
    async updateStatus(reviewId, status) {
        const { data, error } = await supabase
            .from('reviews')
            .update({ status })
            .eq('id', reviewId)
            .select()
            .single();

        if (error) throw error;
        return data;
    },

    // Generate AI Draft (Mock for now, will connect to real AI later)
    async generateDraft(reviewContent, tone) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        return `Thank you for your review! We appreciate your feedback about "${reviewContent.substring(0, 10)}..." and are glad you visited.`;
    }
};
