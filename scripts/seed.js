
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read .env manually
const envPath = path.resolve(__dirname, '../.env');
const envConfig = fs.readFileSync(envPath, 'utf-8');
const env = {};
envConfig.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
        env[key.trim()] = value.trim();
    }
});

const SUPABASE_URL = env.VITE_SUPABASE_URL;
const SUPABASE_KEY = env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('Missing Supabase credentials in .env');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function seed() {
    console.log('🌱 Starting Seed...');

    // 0. Authenticate User
    console.log('... Creating/Authenticating Admin User');
    const email = `admin${Math.floor(Math.random() * 10000)}@mybusiness.com`; // Reduce collision chance
    const password = 'password123';

    // IMPORTANT: In Supabase Node.js client, we must verify if the session is persisted.
    // Basic signUp returns a session, but let's be explicit.

    let { data: { user, session }, error: authError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (authError) {
        console.error('Sign up error:', authError.message);
        return;
    }

    if (!session && user) {
        // Sometimes signUp doesn't return session if email confirmation is on. 
        console.error('❌ User created but NO SESSION returned.');
        console.error('   Supabase "Enable Email Confirmations" might be ON.');
        console.error('   Please go to Authentication -> Providers -> Email -> Disable "Confirm Email"');
        return;
    }

    if (session) {
        // Force the client to use this session
        const { error: sessionError } = await supabase.auth.setSession(session);
        if (sessionError) console.error('Session Set Error:', sessionError);
    }

    // Double check auth
    const { data: { user: currentUser } } = await supabase.auth.getUser();
    console.log(`✅ Authenticated as: ${currentUser?.email} (${currentUser?.id})`);

    if (!currentUser) {
        console.error('❌ Client is NOT authenticated. Aborting.');
        return;
    }

    // 1. Create Organization (as authorized user)
    console.log('... Creating Organization');
    const orgId = crypto.randomUUID();

    const { error: orgError } = await supabase
        .from('organizations')
        .insert([{
            id: orgId,
            name: 'My Business',
            settings: { brand_voice: 'friendly' }
        }]);

    if (orgError) {
        console.error('Error creating org:', orgError);
        return;
    }
    console.log('✅ Organization created:', orgId);

    // 1.5 Create Profile to link User -> Org
    // (Important so the app knows which Org this user belongs to)
    const { error: profileError } = await supabase
        .from('profiles')
        .upsert([{
            id: currentUser.id,
            org_id: orgId,
            role: 'admin',
            full_name: 'Admin User'
        }]);

    if (profileError) {
        console.error('Error creating profile:', JSON.stringify(profileError, null, 2));
    } else {
        console.log('✅ Profile linked');
    }

    // 2. Create Location
    console.log('... Creating Location');
    const locationId = crypto.randomUUID();

    const { error: locError } = await supabase
        .from('locations')
        .insert([{
            id: locationId,
            org_id: orgId,
            name: 'Main Office',
            address: '123 Main St, Austin, TX'
        }]);

    if (locError) {
        console.error('Error creating location:', locError);
        return;
    }
    console.log('✅ Location created:', locationId);

    // 3. Create Reviews
    console.log('... Creating Reviews');
    const reviews = [
        {
            location_id: locationId,
            platform: 'google',
            rating: 5,
            author_name: 'Sarah Jenkins',
            content: 'Absolutely loved the service! The team was professional and the results were amazing. Highly recommend.',
            sentiment: 'positive',
            status: 'new',
            created_at: new Date(Date.now() - 86400000 * 2).toISOString()
        },
        {
            location_id: locationId,
            platform: 'yelp',
            rating: 4,
            author_name: 'Mike Ross',
            content: 'Great experience overall. Bit of a wait time but worth it.',
            sentiment: 'positive',
            status: 'posted',
            created_at: new Date(Date.now() - 86400000 * 5).toISOString()
        },
        {
            location_id: locationId,
            platform: 'facebook',
            rating: 5,
            author_name: 'Emily Blunt',
            content: 'Best local business in town! fast and friendly.',
            sentiment: 'positive',
            status: 'new',
            created_at: new Date(Date.now() - 86400000 * 1).toISOString()
        },
        {
            location_id: locationId,
            platform: 'google',
            rating: 2,
            author_name: 'John Doe',
            content: 'Not what I expected. The price was too high for the quality.',
            sentiment: 'negative',
            status: 'new',
            created_at: new Date(Date.now() - 86400000 * 10).toISOString()
        },
        {
            location_id: locationId,
            platform: 'google',
            rating: 5,
            author_name: 'Jessica Pearson',
            content: 'Incredible attention to detail. Will definitely utilize their services again.',
            sentiment: 'positive',
            status: 'posted',
            created_at: new Date(Date.now() - 86400000 * 0.5).toISOString()
        }
    ];

    const { error: revError } = await supabase
        .from('reviews')
        .insert(reviews);

    if (revError) {
        console.error('Error creating reviews:', revError);
        return;
    }
    console.log('✅ Created 5 Dummy Reviews');

    console.log('🌱 Seed Complete! Login with:');
    console.log(`   Email: ${email}`);
    console.log(`   Password: ${password}`);
}

seed();
