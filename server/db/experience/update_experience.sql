UPDATE experience_table
SET title = ${title}, company = ${company}, location = ${location}, description = ${description}, start_date = ${start_date}, end_date = ${end_date}
WHERE id = ${id} AND authid = ${authid}
RETURNING title, company, location, description, start_date, end_date, id
