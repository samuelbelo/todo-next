migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o1pkq5h4g5dtmpl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t1sgy6lp",
    "name": "isCompleted",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("o1pkq5h4g5dtmpl")

  // remove
  collection.schema.removeField("t1sgy6lp")

  return dao.saveCollection(collection)
})
