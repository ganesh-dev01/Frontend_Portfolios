import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://vytznygjcnqgagehofre.supabase.co';


const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5dHpueWdqY25xZ2FnZWhvZnJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0OTE1NDAsImV4cCI6MjA1MzA2NzU0MH0.e-GjRB69KynfWY8-U0GOjojZvJdRWAa306mm-_FDwy8';


const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
