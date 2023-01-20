* Development stage
*** database name: xem trong file ormconfig.json
*** run migration: $ `npm run typeorm migration:run`
*** drop all tables: $ `npm run typeorm schema:drop`

NOTE: 
**** muốn chạy migration thì vào file ormconfig.json ==> sửa dòng migrations: `dist/**/migration/*.{ts,js}` --> `src/migration/*.{ts,js}`
Con neu co file env thi vao file `.env` doi `TYPEORM_MIGRATIONS=dist/**/migration/*.js,dist/**/migration/*.ts` thanh `TYPEORM_MIGRATIONS=src/migration/*.js,src/migration/*.ts`

**** Sau do, neu muon run app local thi chuyen nguoc lai: migrations: `src/migration/*.{ts,js}` --> `dist/**/migration/*.{ts,js}`

* Production stage: su dung env thay cho file ormconfig.json
