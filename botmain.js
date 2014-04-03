// Huro/Hearrk
/* Do not attempt to pass as own work.
/* Before changing anything please ask for permission.
/* Copyright Ⓒ OmniscientLegacy/Huro/Heark
/* Special Thanks:
/* Silone1, Leon Powalski, NeonLights, Alice(Cirno), Lutra
*/
({
        afterChannelMessage: function (
            message, channel, html) {
            if (message.indexOf(':') >=
                0) {
                message = message.substr(
                    message.indexOf(':') +
                    2);
            }
            if (message == "BattleBot") { // Put bot name 
                client.network().sendChanMessage(
                    channel,
                    "BattleBot Version 1.7 Current Supported Tiers: XY 1v1 Created By: Tyrantrum, Akari1 Use ~commands to view commands"
                );
                return;
            }
            if (message == "~commands") {
                client.network().sendChanMessage(
                    channel,
                    "Commands are ~mute, ~jump, ~joke, ~joke2, joke3, ~catch, ~attack"
                );
                return;
            }
            if (message == "~mute") {
                client.network().sendChanMessage(
                    channel,
                    "You cannot mute silly faggot."
                );
                return;
            }
            if (message == "~jump") {
                client.network().sendChanMessage(
                    channel,
                    "** Jumps!.");
                return;
            }
            if (message == "~joke") {
                client.network().sendChanMessage(
                    channel,
                    "Did you hear about the guy whose whole left side was cut off? He's all right now."
                );
                return;
            }
            if (message == "~joke2") {
                client.network().sendChanMessage(
                    channel,
                    "I'm reading a book about anti-gravity. It's impossible to put down."
                );
                return;
            }
            if (message == "~joke3") {
                client.network().sendChanMessage(
                    channel,
                    "It's not that the man did not know how to juggle, he just didn't have the balls to do it."
                );
                return;
            }
            if (message == "~catch") {
                client.network().sendChanMessage(
                    channel,
                    "You caught a" +
                    sys.pokemon(sys.rand(
                        1, 649)) + "!");
            }
            if (message == "~attack") {
                client.network().sendChanMessage(
                    channel, "You used" +
                    sys.attack(sys.rand(
                        1, 559)) + "!");
            }
            var deaths = new Array(
                "Fell to their doom.",
                "Caught a glimpse of themselves in the mirror.",
                "Fell into a sharpedo tank."
            );
        }
        if (message == "~death") {
            client.network().sendChanMessage(
                channel, "");

        }
    }
});
