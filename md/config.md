[home](../README.md)
Config
------

* [Panel.json](#Panel.json)

# Panel.json

```json
exports.panel = [
    ... ,
        {
            /**
             * @type number
             * @desciption id of panel
             * @value
             */
           id: 1,
            /**
             * @type Object
             * @desciption type of panel
             */
            type: {
                /**
                 * @type String
                 * @desciption categoriy panel
                 * @value 'EDITOR' || 'LIST' || 'SEARCH' || 'ARTICLE' || 'CHART'
                 */
                category: 'EDITOR',
                /**
                 * @type String
                 * @desciption subcategory panel
                 * @value undefined
                 */
                subcategory: ''
            },
            /**
             * @type String
             * @desciption name of panel display in DOM class
             */
            name:'note',
            /**
             * @type String
             * @desciption title display in header panel
             */
            title: 'Bloc Notes',
            /**
             * @type String
             * @Library Font Awesome
             * @desciption icone display in header panel
             */
            icons: 'fa fa-clipboard',
        }
    ...
]
```
