/*
 * Copyright (c) 2012 Gracenote.
 *
 * This software may not be used in any way or distributed without
 * permission. All rights reserved.
 *
 * Some code herein may be covered by US and international patents.
 */


// You have been issued a Gracenote Client ID from Gracenote Professional Services.
// This client ID has the form XXXXXXXX-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Replace the CLIENT_ID below with the XXXXXXXX from your client ID
// Replace the CLIENT_ID_TAG below with the xxxxxxxxxxxxxxxxxxxxxxxxxxxxx from your client ID

// This Client ID/TAG is used for ACR/Video/EPG queries
#define CLIENT_ID_VIDEO               @"945408" // replace me
#define CLIENT_TAG_VIDEO           @"F61A94238B405F7A141EF0D069C6B6D0" // replace me


// MusicID queries require a separate client ID/TAG.
// Consult Gracenote Professional Severices for assistance.
#define ENABLE_MUSIC_ID 0
#if ENABLE_MUSIC_ID

#define CLIENT_ID_MUSIC             @"" // replace me
#define CLIENT_TAG_MUSIC         @"" // replace me

#endif



// You have also been issued a license file from GN Professional Services.
// replace the empty LICENSE_STRING below with the text from you license file.
// Line feeds should be replaced by the escape string "\r\n", e.g. @"this is line one\r\nThis is line 2"
// GN Professional Services can supply you with a properly formatted license string by request.

// If you wish to utilize both ACR/Video/EPG and MusicID in the same application, the
// license must contain entitlements for both clientIDs above. Consult Gracenote Professional
// Severices for assistance.

#define LICENSE_STRING            @"-- BEGIN LICENSE v1.0 65C4F3EB --\nlicensee: Gracenote, Inc.\nname:\nnotes: Lic Gen 2.1\nstart_date: 0000-00-00\nclient_id: 945408\nvideoid_explore: enabled\nacr: enabled\nepg: enabled\n-- SIGNATURE 65C4F3EB --\nlAADAgAe3m6t4KPihfWDScUCuWrIbhBkmNKVQX49fYYRFVz8AB4MGf0j1PRo9R8/PPOHChIxuxoMyBKXDY59RPeq62U=\n-- END LICENSE 65C4F3EB --" // replace me





