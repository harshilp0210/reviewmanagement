-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Organizations
create table organizations (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  settings jsonb default '{}'::jsonb, -- AI Brand Voice settings go here
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Locations
create table locations (
  id uuid default uuid_generate_v4() primary key,
  org_id uuid references organizations(id) on delete cascade not null,
  name text not null,
  address text,
  settings jsonb default '{}'::jsonb, -- Location specific settings
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Profiles (Users extending auth.users)
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  org_id uuid references organizations(id) on delete cascade,
  role text check (role in ('admin', 'manager', 'agent', 'viewer')) default 'viewer',
  full_name text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Reviews
create table reviews (
  id uuid default uuid_generate_v4() primary key,
  location_id uuid references locations(id) on delete cascade not null,
  platform text check (platform in ('google', 'yelp', 'facebook', 'direct')) not null,
  rating integer check (rating >= 1 and rating <= 5) not null,
  author_name text not null,
  content text,
  sentiment text check (sentiment in ('positive', 'neutral', 'negative')),
  status text check (status in ('new', 'drafted', 'pending_approval', 'posted', 'closed')) default 'new',
  response_draft text, -- The AI draft or human draft
  response_text text, -- The final posted response
  response_posted_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Conversations (Inbox)
create table conversations (
  id uuid default uuid_generate_v4() primary key,
  location_id uuid references locations(id) on delete cascade not null,
  customer_name text,
  channel text check (channel in ('webchat', 'sms', 'email')) not null,
  status text check (status in ('open', 'closed', 'snoozed')) default 'open',
  assigned_to uuid references profiles(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 6. Messages
create table messages (
  id uuid default uuid_generate_v4() primary key,
  conversation_id uuid references conversations(id) on delete cascade not null,
  sender_type text check (sender_type in ('user', 'agent', 'system')) not null,
  content text not null,
  is_internal boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Row Level Security (RLS) Examples

-- Enable RLS
alter table organizations enable row level security;
alter table locations enable row level security;
alter table reviews enable row level security;

-- Policy: Users can view data belonging to their Organization
create policy "Users can view their own organization"
  on organizations for select
  using ( id in (select org_id from profiles where profiles.id = auth.uid()) );

create policy "Users can view locations in their organization"
  on locations for select
  using ( org_id in (select org_id from profiles where profiles.id = auth.uid()) );

create policy "Users can view reviews in their organization"
   using ( location_id in (select id from locations where org_id in (select org_id from profiles where profiles.id = auth.uid())) );

-- INSERT POLICIES (Required for Seeding & Operations)
create policy "Enable insert for authenticated users only"
  on organizations for insert 
  with check (auth.role() = 'authenticated');

create policy "Enable insert for authenticated users only"
  on locations for insert 
  with check (auth.role() = 'authenticated');

create policy "Enable insert for authenticated users only"
  on reviews for insert 
  with check (auth.role() = 'authenticated');

create policy "Enable insert for users own profile"
  on profiles for insert 
  with check (auth.uid() = id);

create policy "Enable insert for authenticated users"
  on conversations for insert
  with check (auth.role() = 'authenticated');

create policy "Enable insert for authenticated users"
  on messages for insert
  with check (auth.role() = 'authenticated');
