
import { createClient } from '@supabase/supabase-js'


export const supabaseUrl = 'https://zpycvktivkmwnzyendue.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpweWN2a3Rpdmttd256eWVuZHVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMjY2NjIsImV4cCI6MjAyNzgwMjY2Mn0.hlIYl2HueeGsQNMYttWiZMAYxm6W70d64MTbNAaUU4Y'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;