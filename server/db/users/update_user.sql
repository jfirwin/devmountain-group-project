UPDATE users
SET username = ${username}, firstname = ${firstname}, lastname = ${lastname}, description = ${description}, imgurl = ${imgurl}, theme = ${theme}
WHERE authid = ${authid}
RETURNING username, firstname, lastname, description, imgurl, theme
