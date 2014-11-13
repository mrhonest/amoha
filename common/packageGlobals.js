/**
 * Created by sanathshetty on 11/12/14.
 */

// exported, global/window scope
AmohaCore = {};
AmohaCore.Schemas = {};
AmohaCore.Collections = {};
AmohaCore.Helpers = {};
AmohaCore.Packages = {};
AmohaCore.MetaData = {};
AmohaCore.Locale = {};

if (Meteor.isClient) {
    AmohaCore.Alerts = {};
    AmohaCore.Subscriptions = {};
}

// convenience
Alerts = AmohaCore.Alerts;
Schemas = AmohaCore.Schemas;

AmohaCore.Packages = {};