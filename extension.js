({
    name: "HUSKYLENS", // Category Name
    description: "An Easy-to-use AI Machine Vision Sensor",
    author: "INEX",
    category: "Sensors",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#17202A", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "huskylens_is_ready",
        "huskylens_mode",
        "huskylens_update",
        {
            xml: `
                <block type="huskylens_block_is_ready">
                    <value name="id">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
              </block>
              `
        },
        {
            xml: `
                <block type="huskylens_block_get_pos">
                    <value name="id">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
              </block>
              `
        },
        {
            xml: `
                <block type="huskylens_block_get_size">
                    <value name="id">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
              </block>
              `
        },
    ]
});
