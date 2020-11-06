Blockly.Python['huskylens_is_ready'] = function(block) {
  Blockly.Python.definitions_['import_HUSKYLENS'] = 'import HUSKYLENS';

  var code = `HUSKYLENS.isReady()`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['huskylens_update'] = function(block) {
  Blockly.Python.definitions_['import_HUSKYLENS'] = 'import HUSKYLENS';

  var code = `HUSKYLENS.update()\n`;
  return code;
};

Blockly.Python['huskylens_mode'] = function(block) {
  Blockly.Python.definitions_['import_HUSKYLENS'] = 'import HUSKYLENS';

  var dropdown_algorithm = block.getFieldValue('algorithm');

  var code = `HUSKYLENS.setAlgorithm(HUSKYLENS.${dropdown_algorithm})\n`;
  return code;
};

Blockly.Python['huskylens_block_is_ready'] = function(block) {
  Blockly.Python.definitions_['import_HUSKYLENS'] = 'import HUSKYLENS';

  var value_id = Blockly.Python.valueToCode(block, 'id', Blockly.Python.ORDER_ATOMIC);

  var code = `HUSKYLENS.blockIsReady(${value_id})`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['huskylens_block_get_pos'] = function(block) {
  Blockly.Python.definitions_['import_HUSKYLENS'] = 'import HUSKYLENS';

  var value_id = Blockly.Python.valueToCode(block, 'id', Blockly.Python.ORDER_ATOMIC);
  var dropdown_axis = block.getFieldValue('axis');

  var code = `HUSKYLENS.blockGetPos(${value_id})[${dropdown_axis}]`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['huskylens_block_get_size'] = function(block) {
  Blockly.Python.definitions_['import_HUSKYLENS'] = 'import HUSKYLENS';

  var value_id = Blockly.Python.valueToCode(block, 'id', Blockly.Python.ORDER_ATOMIC);
  var dropdown_val = block.getFieldValue('val');

  var code = `HUSKYLENS.blockGetSize(${value_id})[${dropdown_val}]`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['huskylens_arrow_is_ready'] = function(block) {
  Blockly.Python.definitions_['import_HUSKYLENS'] = 'import HUSKYLENS';

  var code = `HUSKYLENS.arrowIsReady()`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['huskylens_arrow_get_pos'] = function(block) {
  Blockly.Python.definitions_['import_HUSKYLENS'] = 'import HUSKYLENS';

  var dropdown_axis = block.getFieldValue('axis');

  var code = `HUSKYLENS.arrowGetPos()[${dropdown_axis}]`;
  return [code, Blockly.Python.ORDER_NONE];
};
