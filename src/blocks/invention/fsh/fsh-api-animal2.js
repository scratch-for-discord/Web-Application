import Blockly from "blockly/core";

const blockName = "inv_fsh_api_animal2";

const blockData = {
  "message0": "get random %1 image from fsh api",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "output": "String",
  "colour": '#50494e',
  "tooltip": "Gets a random animal picture (link) from the fsh api",
  "helpUrl": "https://fsh-bot.frostzzone.repl.co/api/animal"
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
  var text_type = block.getFieldValue('TYPE');
  text_type = encodeURIComponent(text_type.toLowerCase());

  var code = `await _S4D_inventionFSHapiAnimal('${text_type}')`;

  return [code, Blockly.JavaScript.ORDER_NONE];
};