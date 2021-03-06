cc.Class({
    extends: cc.Component,
    properties: {
        target: cc.Node,
        sprite: cc.SpriteFrame,
        checkedSprite: cc.SpriteFrame,
        checked: false,
        groupId: -1,
    },
    // use this for initialization
    onLoad: function() {
        if (cc.vv == null) {
            return;
        }
        if (cc.vv.radiogroupmgr == null) {
            var RadioGroupMgr = require("RadioGroupMgr");
            cc.vv.radiogroupmgr = new RadioGroupMgr();
            cc.vv.radiogroupmgr.init();
        }
        console.log(typeof(cc.vv.radiogroupmgr.add));
        cc.vv.radiogroupmgr.add(this);
        this.refresh();
    },
    refresh: function() {
        var targetSprite = this.target.getComponent(cc.Sprite);
        if (this.checked) {
            targetSprite.spriteFrame = this.checkedSprite;
        } else {
            targetSprite.spriteFrame = this.sprite;
        }
    },
    check: function(value) {
        this.checked = value;
        this.refresh();
    },
    onClicked: function() {
        cc.vv.radiogroupmgr.check(this);
    },
    onDestroy: function() {
        if (cc.vv && cc.vv.radiogroupmgr) {
            cc.vv.radiogroupmgr.del(this);
        }
    }
});