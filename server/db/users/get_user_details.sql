SELECT
  U.username,
  U.firstname,
  U.lastname,
  U.description,
  U.imgurl,
  U.theme,
  COALESCE(skills.skills, '[]') AS skills,
  COALESCE(education.education, '[]') AS education,
  COALESCE(experience.experience, '[]') AS experience
FROM
  users U FULL
  JOIN (
    SELECT
      S.authid,
      json_agg(
        (
          SELECT
            x
          FROM(
              SELECT
                S.skill,
                S.lvl,
                S.id
            ) x
        )
      ) AS skills
    FROM
      skills_table S
    GROUP BY
      S.authid
  ) AS skills ON skills.authid = U.authid FULL
  JOIN (
    SELECT
      E.authid,
      json_agg(
        (
          SELECT
            x
          FROM(
              SELECT
                E.school,
                E.emphasis,
                E.start_date,
                E.end_date,
                E.id
            ) x
        )
        ORDER BY
        E.start_date DESC,
        E.end_date DESC
      ) AS education
    FROM
      education_table E
    GROUP BY
      E.authid
  ) AS education ON education.authid = U.authid FULL
  JOIN (
    SELECT
      X.authid,
      json_agg(
        (
          SELECT
            x
          FROM(
              SELECT
                X.company,
                X.location,
                X.title,
                X.description,
                X.start_date,
                X.end_date,
                X.id
            ) x
        )
        ORDER BY
        X.start_date DESC,
        X.end_date DESC
      ) AS experience
    FROM
      experience_table X
    GROUP BY
      X.authid
  ) AS experience ON experience.authid = U.authid
WHERE
  U.username = ${username}
