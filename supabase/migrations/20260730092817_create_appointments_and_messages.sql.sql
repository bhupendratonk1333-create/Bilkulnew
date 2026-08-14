/*
# Create appointment_requests and contact_messages tables

## Purpose
Stores appointment booking requests and general contact enquiries submitted
from the public-facing Vinayak Dental Clinic website. There is no sign-in flow —
the site is a single-tenant public form, so submissions come from the anon key.

## 1. New Tables

### appointment_requests
- id            (uuid, primary key)
- name          (text, not null) — patient name
- phone         (text, not null) — contact number
- email         (text, nullable) — optional email
- service       (text, nullable) — requested treatment slug / label
- preferred_date(text, nullable) — requested appointment date (YYYY-MM-DD)
- preferred_time(text, nullable) — requested time slot label
- message       (text, nullable) — extra notes / symptoms
- status        (text, not null, default 'new') — new / contacted / confirmed / closed
- created_at    (timestamptz, default now())

### contact_messages
- id            (uuid, primary key)
- name          (text, not null)
- phone         (text, nullable)
- email         (text, nullable)
- subject       (text, nullable)
- message       (text, not null)
- status        (text, not null, default 'new')
- created_at    (timestamptz, default now())

## 2. Security
- RLS enabled on both tables.
- Because this is a no-auth public form app, policies use `TO anon, authenticated`
  so the anon-key frontend can INSERT its own submissions.
- SELECT / UPDATE / DELETE are intentionally NOT granted to anon (the public must
  not be able to read or modify other people's submissions). Only an authenticated
  clinic admin (via the Supabase dashboard / service role) can read and manage them.
- This is an intentional public-write, private-read design.

## 3. Notes
- No user_id / auth.users foreign keys — single-tenant, no sign-in.
- Indexes added on created_at for chronological listing.
*/

CREATE TABLE IF NOT EXISTS appointment_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text,
  preferred_date text,
  preferred_time text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text,
  email text,
  subject text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE appointment_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- appointment_requests: public can insert only; reads/updates restricted to authenticated (clinic admin)
DROP POLICY IF EXISTS "anon_insert_appointments" ON appointment_requests;
CREATE POLICY "anon_insert_appointments"
  ON appointment_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_appointments" ON appointment_requests;
CREATE POLICY "auth_select_appointments"
  ON appointment_requests FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_appointments" ON appointment_requests;
CREATE POLICY "auth_update_appointments"
  ON appointment_requests FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_appointments" ON appointment_requests;
CREATE POLICY "auth_delete_appointments"
  ON appointment_requests FOR DELETE
  TO authenticated USING (true);

-- contact_messages: same pattern
DROP POLICY IF EXISTS "anon_insert_messages" ON contact_messages;
CREATE POLICY "anon_insert_messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_messages" ON contact_messages;
CREATE POLICY "auth_select_messages"
  ON contact_messages FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_messages" ON contact_messages;
CREATE POLICY "auth_update_messages"
  ON contact_messages FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_messages" ON contact_messages;
CREATE POLICY "auth_delete_messages"
  ON contact_messages FOR DELETE
  TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS appointment_requests_created_at_idx
  ON appointment_requests (created_at DESC);

CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx
  ON contact_messages (created_at DESC);
