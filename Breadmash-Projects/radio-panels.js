
SWAM.radio = {
        append: function() {
            $("body").append(getTemplateContent("#Radio_Panel")),
            this.loadOptions(),
            $("#btnRadioConfig").click((function() {
                SWAM.radio.showConfig(SWAM.radio.currentChannel)
            }
            ))
        },
        currentChannel: 0,
        channelMethods: [Network.sendChat, Network.sendTeam, Network.sendSay],
        visible: function() {
            return "none" !== $("#radioPanel").css("display")
        },
        send: function(Bt) {
            this.channelMethods[this.currentChannel](Bt)
        },
        sendTo: function(Bt, Gt) {
            this.channelMethods[Bt](Gt)
        },
        channelNames: ["* Radio to All *", "* Radio to TEAM *", "* CLOSE RANGE signal *"],
        channelKeys: ["Z", "X", "C"],
        options: [[], [], []],
        defaultOptions: [["gg", "Hi!", "Yes", "No", "Thanks!", "You are welcome!", "I'll be right back.", "Got to go, cya!", "-SWAM-PING", "Try StarMash, a mod for Airmash!|How to use:  tiny.cc/starmash or play as guest in:  starma.sh"], ["Affirmative", "Negative", "** I'VE GOT THE FLAG! COVER ME! **", "** THE ENEMY HAS OUR FLAG! **", "** All wings, protect our flag carrier! **", "Defending the base! Need assistance!", "Attacking their base!  Need assistance!", "On my way!", "Cancel that..", "Prowler in our base!"], ["Hey there!", "Stop!", "Go Go Go!", "Imperial scum!", "Rebel scum!", "Prowler here!", "YEE-HAW!!!", ":lol:", ":cry:", ":clap:"]],
        loadOptions: function() {
            var Bt = config.settings.SWAM_RadioMessages;
            if (null != Bt) {
                SWAM.radio.options = Bt
            } else {
                SWAM.radio.options = jQuery.extend(!0, {}, SWAM.radio.defaultOptions)
            }
        },
        showConfig: function(Bt) {
            this.hide();
            var Gt = getTemplateContent("#Radio_Customization_Title");
            Gt = Gt.replace(/\$channel/g, SWAM.radio.channelNames[Bt]);
            let Xt = createModal({
                title: Gt,
                content: getTemplateContent("#Radio_Customization_Content"),
                width: "550px",
                maxHeight: "450px",
                height: "450px"
            });
            for (var Yt = getTemplateContent("#Radio_Customization_Message"), Ht = 0; 10 > Ht; Ht++) {
                Gt = Yt.replace(/\$index/g, 9 > Ht ? Ht + 1 : "0");
                var jt = $(Gt);
                $("input", jt).val(SWAM.radio.options[Bt][Ht]),
                $(".optionList", Xt).append(jt)
            }
            $("body").append(Xt),
            Xt.focus(),
            $("#radioCustomizeSave", Xt).click((function() {
                for (var Wt = $("input", Xt), zt = 0; zt < Wt.length; zt++)
                    SWAM.radio.options[Bt][zt] = Wt[zt].value;
                Tools.setSettings({
                    SWAM_RadioMessages: SWAM.radio.options
                }),
                Xt.remove()
            }
            )),
            $("#radioCustomizeCancel", Xt).click((function() {
                Xt.remove()
            }
            )),
            $("#radioRestoreThis", Xt).click((function() {
                confirmDialog({
                    title: "Are you sure? This will delete all customized messages for this panel and restore them to default.",
                    message: SWAM.radio.channelNames[Bt] + "   -  Confirmation needed",
                    yes: function() {
                        var Wt = jQuery.extend(!0, [], SWAM.radio.defaultOptions[Bt]);
                        SWAM.radio.options[Bt] = Wt,
                        Tools.setSettings({
                            SWAM_RadioMessages: SWAM.radio.options
                        }),
                        SWAM.radio.loadOptions(),
                        Xt.remove()
                    }
                })
            }
            )),
            $("#radioRestoreAll", Xt).click((function() {
                confirmDialog({
                    title: "Are you sure? This will delete all customized messages and restore them to default.",
                    message: "Confirmation needed",
                    yes: function() {
                        Tools.removeSetting("SWAM_RadioMessages"),
                        SWAM.radio.loadOptions(),
                        Xt.remove()
                    }
                })
            }
            )),
            $(Xt).keydown((function(Wt) {
                Wt.stopImmediatePropagation()
            }
            )).keyup((function(Wt) {
                Wt.stopImmediatePropagation()
            }
            ))
        },
        show: function(Bt) {
            SWAM.radio.currentChannel = Bt;
            for (var Gt = SWAM.radio.options, Xt = "Close Menu - Press " + SWAM.radio.channelKeys[Bt] + "<div>-----</div>", Yt = 0; Yt < Gt[Bt].length; Yt++)
                Xt += "<div><span style='margin-right: 15px;'>" + (Yt + 1) % 10 + ".</span>" + Gt[Bt][Yt] + "</div>";
            $("#radioChannel").html(SWAM.radio.channelNames[Bt]),
            $("#radioOptions").html(Xt),
            $("#radioPanel").show()
        },
        hide: function() {
            $("#radioPanel").hide()
        },
        handle_keys: function(Bt) {
            var Gt = $.inArray(Bt.which, [90, 88, 67]);
            if (-1 < Gt && (SWAM.radio.visible() && Gt == SWAM.radio.currentChannel ? SWAM.radio.hide() : SWAM.radio.show(Gt)),
            27 == Bt.which && SWAM.radio.visible() && SWAM.radio.hide(),
            48 <= Bt.which && 57 >= Bt.which && SWAM.radio.visible()) {
                SWAM.radio.hide();
                let Ht = "";
                Gt = Bt.which - 49,
                -1 == Gt && (Gt = 9);
                let jt = SWAM.radio.options
                  , Wt = SWAM.radio.currentChannel;
                if (0 <= Gt && Gt < jt[Wt].length) {
                    Ht = jt[Wt][Gt];
                    var Xt = Ht.split(/\s*\|\s*/);
                    Gt = 0;
                    var Yt = function() {
                        0 < Xt[Gt].length && SWAM.radio.sendTo(Wt, Xt[Gt]),
                        Gt++,
                        Gt < Xt.length && setTimeout(Yt, 1500)
                    };
                    Yt()
                } else
                    SWAM.radio.hide();
                Bt.stopImmediatePropagation(),
                Bt.stopPropagation(),
                Bt.preventDefault()
            }
        }
    },
