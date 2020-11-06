Blockly.defineBlocksWithJsonArray([
{
  "type": "huskylens_is_ready",
  "message0": "HUSKYLENS is ready ?",
  "output": null,
  "colour": "#17202A",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "huskylens_update",
  "message0": "HUSKYLENS update",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#17202A",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "huskylens_mode",
  "message0": "HUSKYLENS set mode %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "algorithm",
      "options": [
        [
          "Face Recognition",
          "FACE_RECOGNITION"
        ],
        [
          "Object Tracking",
          "OBJECT_TRACKING"
        ],
        [
          "Obejct Recognition",
          "OBJECT_RECOGNITION"
        ],
        [
          "Line Tracking",
          "LINE_TRACKING"
        ],
        [
          "Color Recognition",
          "COLOR_RECOGNITION"
        ],
        [
          "Tag Recognition",
          "TAG_RECOGNITION"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#17202A",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "huskylens_block_is_ready",
  "message0": "HUSKYLENS block %1 is ready ?",
  "args0": [
    {
      "type": "input_value",
      "name": "id",
      "check": "Number"
    }
  ],
  "output": null,
  "colour": "#17202A",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "huskylens_block_get_pos",
  "message0": "HUSKYLENS block %1 get position %2",
  "args0": [
    {
      "type": "input_value",
      "name": "id",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "axis",
      "options": [
        [
          "x",
          "0"
        ],
        [
          "y",
          "1"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#17202A",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "huskylens_block_get_size",
  "message0": "HUSKYLENS block %1 get size %2",
  "args0": [
    {
      "type": "input_value",
      "name": "id",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "val",
      "options": [
        [
          "width",
          "0"
        ],
        [
          "height",
          "1"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#17202A",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "huskylens_arrow_is_ready",
  "message0": "HUSKYLENS arrow is ready ?",
  "output": null,
  "colour": "#17202A",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "huskylens_arrow_get_pos",
  "message0": "HUSKYLENS arrow get position %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "axis",
      "options": [
        [
          "x arrowhead",
          "2"
        ],
        [
          "y arrowhead",
          "3"
        ],
        [
          "x origin",
          "0"
        ],
        [
          "y origin",
          "1"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "#17202A",
  "tooltip": "",
  "helpUrl": ""
}
]);
