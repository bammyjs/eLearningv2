create extension if not exists pgcrypto;

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  university_name text not null,
  first_name text not null,
  last_name text not null,
  work_email text not null,
  message text not null,
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.contact_submissions enable row level security;

drop policy if exists "Allow public contact form inserts" on public.contact_submissions;

create policy "Allow public contact form inserts"
on public.contact_submissions
for insert
to anon
with check (true);
