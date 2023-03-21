import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0";

const supabaseUrl =   "https://xeycaxinxsbnhuuncruj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhleWNheGlueHNibmh1dW5jcnVqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NzgwNjgwNiwiZXhwIjoxOTkzMzgyODA2fQ.zvVl3DVdw4JdzRF8TePai4fOat_mKINPXLf8OC_qPn4";
const supabase = createClient(supabaseUrl, supabaseKey);

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')
  
  for (let book of books) {
    let bookTable = document.getElementById('books');
    bookTable.innerHTML += `<tr class="data"><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td>${book.description}</td></tr>`
  }
}

getBooks();
