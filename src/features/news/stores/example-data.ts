import { type Article } from "google-news-scraper";

const hardCodedData: Article[] = [
    {
        "title": "Trump-Putin meeting live updates: Trump stops short of announcing ceasefire deal but 'great progress' was made",
        "link": "https://news.google.com/read/CBMilwFBVV95cUxOWVBqanI4ZkhtZmxqcU5FRHVRRXRRVkttSWNKUTZFMTZhSTY0RzJEN3FTLTR1Mmd1eGdLZlJjNWhfSThBV292UVMzWW9Xa2tYVDVVSzFVQjJDTm85NE5FcWNYbDZMVDR5LWVac1NfMVp1S3B1U2tfbjBaMU5zLWljR3ZGMlhKODVuUTVaSDdnYzc5V1BBREJB0gGcAUFVX3lxTFBVR0JpM1JLdWRINE90bmtQcVU4dENXQnpNcF9pLU1aRjRaNl9zUS1LWDJiNXBHOWdiVFNLQWZXMVRvbUEzck84Z1ZsMlhEWnFFVlhCNGROaXNtYmxuM0Y5NldfUXd4TWZidHlmVklLMGZkNXRlY1duejRqQW04a0NDdlRYLVAtU0h4YTUxU2ZZcXpzUWtJZjNPUW9GOA?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iI0NnNWlSbkJETm1kMmJ6bEdYMUZDVFJDZkF4ampCU2dLTWdB=-w400-h224-p-df-rw",
        "source": "ABC News",
        "datetime": "2025-08-16T02:50:00.000Z",
        "time": "41 minutes ago",
        "articleType": "regular"
    },
    {
        "title": "Massachusetts considers breaking with federal vaccine recommendations",
        "link": "https://news.google.com/read/CBMiiwFBVV95cUxQYmljYXBLY3pfU2VNdjc1Z18wRU93UmVzejRDdG96UDYtVUYxcTlrbUJTcGd5ZXFRSkdOMHp6eUg4WHpNNVdLUW85bThmUTMzNUxrMi1wSmZ3b3hhZVZNeFlLSmtuSzVySGlvRDVmNFdsNmgwX3N5cTJOWHRGaVdLWkp3bTg1cElvY3d3?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNTNSMlp5Y21sRFNrVlZTV0pCVFJERUF4aW1CU2dLTWdZcGRZek5MUWM=-w400-h224-p-df-rw",
        "source": "WBUR",
        "datetime": "2025-08-15T15:33:45.000Z",
        "time": "11 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Patriots coach Mike Vrabel gets knocked to the ground breaking up fight during joint practice with Vikings",
        "link": "https://news.google.com/read/CBMiwwFBVV95cUxNdW51WVVBdHNJY3BMRWxGUFF3MFRzQWczb0dQc1ZXejlaS0diNkVldmo4UFJQaTdMLWw3MWsxcG43dk1vZk9lTm9Tazdpc1RKY0dLSEJLZ1R4RXMydThjZVhSVUhVUlBoNHdYLU9ra1RPRXoydEk4UFRhWGZpRExRSklvZHRqVUxEaFYyUV9ybzY1Skg5WEppU1UxUWc0dHQzRjZrb1UzRFhLWl81WFZLa3RuXzBQaXdnay16bDVKZkhGa1nSAcgBQVVfeXFMTng3UDlPc3k5bUJmZXo2NEdzVkY1RlNvQ1d6ektKcEloaDJVMXVwT2xfMURzb2FOZ291SkdjSm55eWdZeUdCeG8wUlBvUTNOWktuSS1pU3lsQmJ5bXZFWXlnNG5TU1UyY2hLMmlWeDZ4dlJYVnRoQ2lKd2ZhNkRNaXFHN1NvSmVlcFhYRHU5MXBIVnN3T3hiV3pUX29lUi1TaS1jTDcwQUNDRzk2ZFBXOS16M1ExZDZkUFJEZTN3Njh1enpiVzEtR1o?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXNVRnBmZW10dlRrWmtRekUxVFJEakJSaWZBeWdLTWdZSmtKWlBzUWM=-w400-h224-p-df-rw",
        "source": "Fox News",
        "datetime": "2025-08-15T12:55:04.000Z",
        "time": "14 hours ago",
        "articleType": "regular"
    },
    {
        "title": "FluMist, a vaccine nasal spray, can now be used at home. Here's what to know about cost and more.",
        "link": "https://news.google.com/read/CBMie0FVX3lxTFBfLUs1aFRQNmFtYzZfWm9TdzZrZGhRWXJSZ3pLaHZIZy02SG9RQU5zMXNwVGVKT05IbkZPcU51VnRQRnk5eGN6akRlZ0FLRUdyZHVYSTNhZHkyTGRfUHMxSGtFMXlpQ213OW1TbWxSemtrdTdPcnJlZkpsRdIBgAFBVV95cUxNeHpUY3U4UDlkTUZfNXZuQmFWTVdQVVpVdlAtUXF5TjJpaEQ0djN6ZmhPX00wU1BBSFFiQzl6N1BpWG5SYk5ack82SVczUXRSQWZVaEo0U2o3ejFVeVlWV1FKbngxdmFGZjlYUlZMVm9JV2pBdkRTSXQwZmFmMEpobA?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iI0NnNW9WM1pFWm5sUVprNXRXbE55VFJDUkF4ajhCU2dLTWdB=-w400-h224-p-df-rw",
        "source": "CBS News",
        "datetime": "2025-08-15T15:01:00.000Z",
        "time": "12 hours ago",
        "articleType": "regular"
    },
    {
        "title": "1 dead in 'horrific' homicide in Jeffersonville; man in custody after 4-hour standoff",
        "link": "https://news.google.com/read/CBMifEFVX3lxTFB4TElKYzVGT1JpS1JYMnRNVTFfa1pnZF9HbC01eVZCXzVZY0hvU0VScVhMX3k2TG9kVUJiZ0ItM1k0YzRiTG9OSDhRUUNpV0dhdGxacDJTbkpvaVpWV2szQ3NNTnlxVjF5c2JJTzh0djBBQm1LUC1IazB1c1c?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iI0NnNXFXalIyVDNFeFZqaEtlaTFpVFJDb0FSaXJBaWdCTWdB=-w400-h224-p-df-rw",
        "source": "WLKY",
        "datetime": "2025-08-15T21:12:00.000Z",
        "time": "6 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Live updates: Today's South Florida News",
        "link": "https://news.google.com/read/CBMiowFBVV95cUxQR0RsN3Fqd3lxaVhGSnk0LVdudDhPV2tpb1h3ZlRlbWdUOGV1V3k3MVVhYXRKa1FfZGYzMF9wNE8wVXZLN2NJX19PMHV2Wk5mWDMyaHJYaHFGY1dLSG1hdzhrenhPT1M3S3RHYkNhYmhQN3BFcUR0STgwYnkyY0xVREN6Rjdpb1kzbllsY3VPMWZDbTVNalVwMTMzME9sbjNiTDdR0gGrAUFVX3lxTE5CSFlvWlRsanZ5UlhPQWJZZXhNTzFtMHdRUll2QV9CU085N0FwbkVuQWcybVJKN0FZSnNCLUZCRkpXUXhHRjViNUhfSWl3ZVk3RWZYUGFxdmZ4LUgxSHhXVmQ1LV83d21Qa3Q1VmpyNm9hOEFJQ2Y3Y2wzWGV0LThJblg5bjdJYW9FZlhGeEtUU1d4LVY2dS16R1FoUTNlZkEySTZTUDF5a2dOcw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNHdWMUYwVmtOR2RFbDZYMTlaVFJDZkF4ampCU2dLTWdhSlFZVEVMZ2c=-w400-h224-p-df-rw",
        "source": "NBC 6 South Florida",
        "datetime": "2025-08-16T03:25:00.000Z",
        "time": "6 minutes ago",
        "articleType": "regular"
    },
    {
        "title": "NEWS CENTER Maine at 6:00 p.m.",
        "link": "https://news.google.com/read/CBMivwFBVV95cUxQSmY2Q3hwRVBidUg1NUFpQmZEbkVMSnIxMHBzSGVhcU1odW9kZW5sT0xPd1NINkVjUzl1bGJEM1VGX3o2OUJhRkJpQVhHOUpsWGg0SjNCREM3aE01RTBvWGdaY1U2Tkg0VnI2UEtiek0xd3NEWG83dUxZT09KaWl4aTNDSGZFem1lNnBQd1lMa0U4cWwweXVwYU41bWZ2bVpMQW9NUGVpWWJLSVdsazhzU0JweGV0blpPRUxZX2FMdw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXZjVTFFUTBsQ1pWZFRPVFV5VFJDZkF4ampCU2dLTWdhSlFvNk9xUVk=-w400-h224-p-df-rw",
        "source": "newscentermaine.com",
        "datetime": "2025-08-15T21:59:00.000Z",
        "time": "5 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Hurricane Erin forms in the Atlantic",
        "link": "https://news.google.com/read/CBMia0FVX3lxTFBCMF9XN0R4UFJWSFFNR191TFlmVVRrV2hmRjYtUEtVNkgxTmQwSUZGVHVuUzZXYk1kUnc5aG9ZRHZsS3pteWoxV1BHUG5HNVdXUk5aYjFCeU8ybG81eGFTLVhhdnlmb2xtNVpN?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNDJkV2hUY1doTmRWcFBTRTlxVFJDZkF4amlCU2dLTWdZVkFveU50UVU=-w400-h224-p-df-rw",
        "source": "KSBW",
        "datetime": "2025-08-15T23:28:00.000Z",
        "time": "4 hours ago",
        "articleType": "regular"
    },
    {
        "title": "BREAKING NEWS: Heavy Law Enforcement Presence in Parsippany – One Suspect Shot",
        "link": "https://news.google.com/read/CBMitgFBVV95cUxNZTNxNHBGZVFvNXhfc1BTX2ZnbzI4cndQMzBtSUpTbFFYenRSM1BZSjNSeEppcjMxX2hIMG5kSUwyYm5ZNVAzSEwwSjQyNzB0T1g5LUNLOHBfTVVVSzFBNk80UHd0WTc0U3dRNkFtaElYRnVfT3pvNHliWTNWZV9OV3h4UHgzQUFISEY4TjJSNk01cUp1YlBRTzhXTG9vVno4Y24yd21XXzU5dE1zbTlvSW1YdXhuZw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNUJWSEJZU1VSNWMzVTNVRkZDVFJEZ0F4aUFCU2dLTWdZWjhZd015UVE=-w400-h224-p-df-rw",
        "source": "Parsippany Focus",
        "datetime": "2025-08-13T13:53:06.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "Country Music Icon Miranda Lambert Announces Breaking News",
        "link": "https://news.google.com/read/CBMimgFBVV95cUxNRmVNdHdXb2Y4b3BVbXBGT19vMm9uRnMyWjRabXZHV05GTlZneDY3NjhBa09RZE9UdVNNTUdTMjhaUXIwQWhrbmx0R1M4cDZVUmtXNU1fai1XLThRUVZlY0dQVWhqTWk3SmZQZEhzVTh4SktfU09CRW9kbUtRaGpOM2JGOEFlVmJLblZBdW1VbFdnem9HSkw4MXBn?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNTJTVkpoVTNsblMxTlBjVWhNVFJDZkF4amlCU2dLTWdhTkpKck1rUW8=-w400-h224-p-df-rw",
        "source": "yahoo.com",
        "datetime": "2025-08-12T17:35:43.000Z",
        "time": "3 days ago",
        "articleType": "regular"
    },
    {
        "title": "New Bern Weather | News, Weather, Sports, Breaking News",
        "link": "https://news.google.com/read/CBMiP0FVX3lxTE40NTRFQkRvM3dybXBEWjd1SGQ4U3Jsd0d0WUZHVXBXUlB4LWRrYVpua09WZHF4S2tsVG52R3p0UQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNVlRamRPTlZOaVJqZGFWbUp4VFJDZkF4ampCU2dLTWdhVm9wUXVPUWM=-w400-h224-p-df-rw",
        "source": "WCTI",
        "datetime": "2025-08-16T00:17:27.000Z",
        "time": "3 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Tristan Rogers, actor who played Robert Scorpio on 'General Hospital,' dies at 79 after battle with lung cancer",
        "link": "https://news.google.com/read/CBMiugFBVV95cUxNWlhzdVNLUHBCRVZnc3ZOMUJxdDg2NDRqWlB4QWZTT2NvYjNHQUJPcDFoNEo3VjNGME9xSUVKMTNLbzZfNzY5RDFwZWxvSm1fYzFkTUtJemlrZWxQMi1SWlpKeE96Qkl5bkdveThBNDZWTTUtcEdHWTBkQmdYQjhYTDZfUElMOUJsZVZRdE9fSnhFdnpKUlg2WE9UbDI1dGVwelF3Z1luc3NjbEhVREFxVGhfM2FVa05YdGfSAb8BQVVfeXFMUDNNdnUzdFhEWGdCdFVrcHlpS0tIQ01welRLTFdzR0htLWpvZDdjUURVZy1sNWdGRk5aZUo0ajB3WEUwekEzSm43UUhWR2pjbmp3TlVYOUkyeVNORHlIZHR2R3RNcjRHemZ6V2FnNEQwUGJFSXRRRUx5alBFSGdRcVBqeFN6WDA4b0tvdXF2VFhnXzVCbzlkR1lLMTU1TlQ1bG9maERKMEVNVkxVSXcya0t2ejhzWFlBVTYxQk53ZVU?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNUtZaTFKZEZsRlJsQTNSVk4yVFJDZkF4ampCU2dLTWdhZFZZRHNJUWs=-w400-h224-p-df-rw",
        "source": "ABC7 Los Angeles",
        "datetime": "2025-08-15T21:22:30.000Z",
        "time": "6 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Springfield Weather | News, Weather, Sports, Breaking News",
        "link": "https://news.google.com/read/CBMiSEFVX3lxTE4ySDRjXzNHWEwxZzE2S3p4ZlVRb3RQTU9fdUhFX3FtTW94ZDZBX2VUTURaQkZGYU5nX0w2RDlWT1NrTGdPX2JxOQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iJ0NnNUpVM2REV0RSRE1rRlljV3AyVFJEQUFoaTRCQ2dLTWdPWlF4WQ=-w400-h224-p-df-rw",
        "source": "WICS",
        "datetime": "2025-08-15T19:47:31.000Z",
        "time": "7 hours ago",
        "articleType": "regular"
    },
    {
        "title": "New Orleans mayor indicted over al­le­ga­tions of trying to hide re­la­tionship with bodyguard",
        "link": "https://news.google.com/read/CBMisAFBVV95cUxNWGlIX1YxMjB0QlBUSDRfVnRSaXJQWVVxaEVOUUtLV29tWjlibUwyNUx1SE9UbVlHaTJmWE9GYkdreWJBV3JhX1lDeXZrbllGSHdrS2tuUE02bkF3Y2xWZlh4anZ4Rkd3cDdxSjZKR2VtNlZtZUNjS2FnamFsVUdabFhKOTlwa2pTOG1vemlXaTMzb3RsS240WkZkOHZTdmxRYXp6T3h1SXM5My1tSGthZA?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNVhUR3RmU0RSdE9VOW1TRmMyVFJDZkF4ampCU2dLTWdZcFJaVE5JUWc=-w400-h224-p-df-rw",
        "source": "Spectrum News",
        "datetime": "2025-08-15T18:47:00.000Z",
        "time": "8 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Chargers Weekly: Breaking Down Chargers Preseason Win vs. Saints",
        "link": "https://news.google.com/read/CBMimAFBVV95cUxQSVU3OWZaZHlmNzF5ZllKc0lraGxHWkQ3TkhBczFmZ3JLQzA5RmdadlhXN0JOMWk4MFJpOGxqVW04MVNoSXRZbnliUnZ1Y044XzhHRHZud25VckdQcE1kOEwyZXJXV1VnUk96ZWJ3RXF2STlhQTNvSlR2cWJHYy1WazZhVjdEUmRvcjJCelhLeFpFcUJMM2pyeA?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iI0NnNWpVMVZMUVVWdFJWOWZSRTFWVFJEc0FSaWtBeWdLTWdB=-w400-h224-p-df-rw",
        "source": "Los Angeles Chargers",
        "datetime": "2025-08-15T14:00:00.000Z",
        "time": "13 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Part of Route 115 in Windham closed due to brush fire, county officials say",
        "link": "https://news.google.com/read/CBMiogFBVV95cUxOVk40YzlEWHVGM3ZzdnFJVU9zOEtfNGJxQkxsRk1peHNHTG5sU3d5YnVOM3J5U1oyRDBXUU82NnlfMEZrQy1iWFkxVjJBb3BnRXVVc1NpekVTRl9lYThxczBhMHViTEF3Y1MxQVA4Yk9RMmc1ZFUtOF9yWGpQclZTNEJWU25wV1V6YW9sNnN0aUNZRTA3ekpwTW9OOUV1dEloMHc?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNU5hVGRYYjJoVVYwVTNSR2syVFJDZkF4ampCU2dLTWdZSklJck1HQVk=-w400-h224-p-df-rw",
        "source": "WMTW",
        "datetime": "2025-08-15T20:38:00.000Z",
        "time": "6 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Columbus Weather | News, Weather, Sports, Breaking News",
        "link": "https://news.google.com/read/CBMiS0FVX3lxTE5CT24wS1NXN3RRamhZZ2lvcFNELWpkUzMzbE43ZVJLN1gxSmlSb3hfWjBBMWZVZ3ZnT1MzWEVDeFB4QlRnZkVtZFhtTQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXZjWFJrVVVwaGMxUmpZMnhuVFJEQUFoaTRCQ2dLTWdZQlZKU25vUWc=-w400-h224-p-df-rw",
        "source": "WTTE",
        "datetime": "2025-08-15T23:49:16.000Z",
        "time": "3 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Trump, Putin ‘Reach Agreement’ in Alaska, More Talks Ahead",
        "link": "https://news.google.com/read/CBMioAFBVV95cUxNbjR4Qi1nOFp2anoxbzJQbzQwdm9ULXRMSUpfNWEtWFVoOWk1R3c4RUJtUUhBUWRFa3ZXS2RORklhRXBYRTF3eElINm95MElSS0xCVEs4bU5yYnVQWENFeWRRTXJIQTg3TGN4UE9aTGJJQjAwbnVtWmdOczQ2bFg4ZVVvY0loZ2k1eDJJRGw3RzZ1QWc1RDJKcnpLR3dFbWth?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNXlOelZmTlV0dlZVbHdPVm93VFJDZkF4amlCU2dLTWdtRk1JQzNLQ1hKcmdF=-w400-h224-p-df-rw",
        "source": "Hungarian Conservative",
        "datetime": "2025-08-16T00:56:15.000Z",
        "time": "2 hours ago",
        "articleType": "regular"
    },
    {
        "title": "OKC Police officer hospitalized in motorcycle wreck",
        "link": "https://news.google.com/read/CBMipwFBVV95cUxPUkdNbGZqQXhwUWJOTmI4S2M4aU1PNVBYYjZ5U0xDY1NCWHYyVVd0eTdSZkpKZnBVQ21JQXVoenVNUzE0VEI1XzNVUDZYZWlWMUI1NnpOd2dlREE0S2F5UGg3RUFLTzlodnVDTVcweGs1clZqMDhWUUJJUjNIMERrVThPSm14V1Z2UWNhZVExR2IyNGltaXVpVjdnOThwQzhZMXh1ZnVkQQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXNlVVpMT1hCSmNGbGFPSFpaVFJDZkF4ampCU2dLTWdhQlFKYXlHQWs=-w400-h224-p-df-rw",
        "source": "News 9",
        "datetime": "2025-08-15T15:21:03.000Z",
        "time": "12 hours ago",
        "articleType": "regular"
    },
    {
        "title": "🚨 Breaking news: Mazatlán eye Guillermo Ochoa as their marquee signing",
        "link": "https://news.google.com/read/CBMif0FVX3lxTE9IdHhyUlpaNFpXbmgyb3RMNEpydGNaekJtcjd6ZE1IUHQ0V1pxWmJPZ2R3ZDAzVHh3WXRINXllTUI0dlNFU0JGOGI5Q0Y2aDF6a2RSM005Rml5NnhMMHBkeXFOdmh6Q2ZURGN6ZUxZUTVQeWhGUDVWTnFFNTZ6MlU?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNUlNVXBqYTBRMGVrZHhjRzFYVFJDd0F4aUFCU2dLTWdZVlFaeG9wZ2c=-w400-h224-p-df-rw",
        "source": "ca.sports.yahoo.com",
        "datetime": "2025-08-16T02:48:38.000Z",
        "time": "42 minutes ago",
        "articleType": "regular"
    },
    {
        "title": "Hurricane Erin forecast to become category 4 storm",
        "link": "https://news.google.com/read/CBMiogFBVV95cUxOdFlDQjFvMXIybHhTcFJWaGVNaWxjaE52bnVPVUZ2Qmh1UWhuTU9ZYjNoVm1pRTBQNS16ODFFRThLQ2RNalpFa1h0S3EydlBpZG14SFQxTDh5UFU2MDYzbVF6cS1lVHZUbi1SNFZLNUVmMENjcHVSM09nSExxNWZuTUFVM2FCcExPWl9JNmFfR2VUYVhuZFRRSDRiTWp0ZFd6Tnc?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iI0NnNTFaMlZXWkdrMU1DMDVhamN6VFJDb0FSaXNBaWdCTWdB=-w400-h224-p-df-rw",
        "source": "Gulf Coast News and Weather",
        "datetime": "2025-08-16T00:12:00.000Z",
        "time": "3 hours ago",
        "articleType": "regular"
    },
    {
        "title": "LEAKED | Maps show how California's redrawn congressional lines could look",
        "link": "https://news.google.com/read/CBMimgFBVV95cUxOUUdJRl95R3pqcnJJejE2dnpnVG5UWU5KaWNRZHZodlRzUFlZQnJQNUluRzZPakg2VEZERVdHcjNlNV9TUHpIaFZEMHBVSUwwT0N6YVhJYVRLekdENTJqQVlMeERadm9rMFprNnFZVTNfZTBFSnVTSE5UaHhPem5zSHRGbEF4MHRTanF1TWc3QjhZRVZHVzRaRjNB?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNVNRVEJ5ZGxCcWIyRlBlaTEwVFJDb0FSaXJBaWdCTWdZaFZJck1LUVk=-w400-h224-p-df-rw",
        "source": "KCRA",
        "datetime": "2025-08-16T01:12:00.000Z",
        "time": "2 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Hilton's Record‑Breaking Campaign with Deepika Padukone Reminds the World Why It Matters Where You Stay, Achieving 5 Billion Views in Eight Weeks",
        "link": "https://news.google.com/read/CBMitwFBVV95cUxPb3ZaZlVyNjlGVk8wSEFwZWZ4aldQa0xibjdrdWxGSDNOTzdvamlET2JCVnh6UXdZMUhjVDBEOWNWaUt2aDkzUHRJTWFPek5KTEd5OHdkMS1NZ3kzQXprSnhHamxyOGJoOUlNa2tBbEZwV3VnN0kydHZZVDNpV21HOVBUQzRYTUNKS1VrczM5MS02MHNIbW01RS01YmlUazkyczdOaGJtakFGSFhSTUVQZGZ6UXNVMEk?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNHpibkZMY1dOZmFWWnZOMDEyVFJDM0FSaVRBaWdCTWdZNUFKUXltUWc=-w400-h224-p-df-rw",
        "source": "Stories From Hilton",
        "datetime": "2025-08-15T16:26:32.000Z",
        "time": "11 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Hurricane Erin tracker: Latest path, maps for first hurricane of Atlantic season",
        "link": "https://news.google.com/read/CBMiqAFBVV95cUxPLU5nODRNcmFlTWxHRW5SRUpCbzNmS0drbW14QmpYaUFOTjBHS1NocWpmbEI4X3AyMkdjTEw0T3hOTHBlaGs2VU8yYllwREgwaVJhVmNPNzJySmp3NkozRUN0TGFwR2NwOXNKU2FuMjhGeHd6b3NvZHc4OEVhdmFCbnJNa3Vqa0ZtQjUybzFRX3dpVFp0VmQzT0xoTG5lSUJ6Z2dpZGk1bTg?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNDVPV3RTU1MwM00xTjNTa05FVFJDZkF4ampCU2dLTWdrQkFJZ0hFYWRMZ3dN=-w400-h224-p-df-rw",
        "source": "ABC News",
        "datetime": "2025-08-15T15:00:00.000Z",
        "time": "12 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Breaking News: USDA to Invest $750 Million to Build a Domestic Sterile Fly Production Facility",
        "link": "https://news.google.com/read/CBMivgFBVV95cUxNOXBCLVA3S3BCWndUMEllbzBoaEhBYUppbEtwbDJvU3E5dG5uVXQxekRmb015LVc1aUFGTW1mQUdhR055WWphYVVhUDlxaVVmMU42MWU1NnBNSWc5c2haZjQwRjVoZVJSZGhiX09WV0s0cEJXSllJVzNaWnJmNlI3clBoSThsWDhJZ2lNenFVTXZ6RGRiUVBLbHB2MDFEcldLcHNjUXZ4eW00cVR1NXNfZGJ6NHNobUhEQ3NyaGV3?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNHpkbEkyU0dWQlQxcFNaMmRmVFJERUF4aW1CU2dLTWdrQlE1WXltYW14N1FF=-w400-h224-p-df-rw",
        "source": "drovers.com",
        "datetime": "2025-08-15T21:11:15.000Z",
        "time": "6 hours ago",
        "articleType": "regular"
    },
    {
        "title": "A Michigan autoworker's wallet is found under a hood in Minnesota — 151,000 miles later",
        "link": "https://news.google.com/read/CBMiqwFBVV95cUxPektMaFhjSGhDMm1oX2JiRS1tZ201cUc4c2F3aDNGc3cxWWtoVzE5NDJKc1M1Z2wxX3pjaTRzcE5yYU56b1ktM0RYcmJVTGhsWlNGTUJNeTZibzNLOW9IREFlMVJ1MmdzVWR2c21OalQwUk5QbVhkSmZVS0ctMnFvWDAtUTZvZWUwTlhGRXhOdGJlbEliR24xUTc0X2UwR3RwZGpKbXZmZ2FmUGvSAbABQVVfeXFMTTZ1VGdzVE5NVlU1eWl2YWZTSlQyRXIxM01XbXZLc0hnNmFNbkVmSG5PbWNOblVPWXZwREdEeUh6Z2pEanBweHNfM1oyVVRZQjBlYUhlREdvT1lJb2pHZkRiWEhfaUpLZU5lUzJsNlpqVDM4elE5Z3J3cDJMUHdxcHp2Nnc4dEQtcWROd0cycVkxZDlvSDNqTng2a2hRSDBZQnd5SGRoVmNSczF6Qmdic24?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXRiM1l4ZFhkZlYyZHVXR3ByVFJDZkF4ampCU2dLTWdZWkJZSXBrZ28=-w400-h224-p-df-rw",
        "source": "ABC News",
        "datetime": "2025-08-15T23:05:30.000Z",
        "time": "4 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Trump-Putin meeting: Joint news conference held after hours of talks on Russia-Ukraine war | Watch Live",
        "link": "https://news.google.com/read/CBMirwFBVV95cUxOeGE0M1pFemh6WFQwTjNmN1kxUnVoU3lEQ1NlVnBXQWs1dmhaNWNvVE9hMkFvakhmNHAxRG9ncUl0SW9yWDZtVUt0VzRoZ2JFNmMtbGo3MDNaWXBTbmhMZklOQmRlcEswdWtzRWJhMjFBMTVpejFaOWpYTjc4dDVMU2hENkdDVEl0UTdpREVZVWF0S1BYVW9tcngtaXZtWUdjMFM3S1Z3bDJhRWpSN2RV0gG0AUFVX3lxTE45VG5mSU1IUEZaUk5XVkRxME5PdDFmWUEyUF9iekwtcVVzVV9kc2QwcFFiOWdvT2hoaXZuUm1FWF9TSjNmQm5tZnVGbW5sQVZUeFlvbXc5QllOZEZjRC1RR0o4WmNYbkxzUjJ1Z2FhOUtEZkxwWGJqMlp4Y3c1LUxGSXFmNVc3Si1PR25ZTUZ2ZHBUTnpwc0NkaFUxaThHczdSUTY0RV85Uko0MXh1VHMtOF80Zg?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXpPVkZ5YjB0UmRsOXlWRVEzVFJDZkF4ampCU2dLTWdZaGxKUnN0UVk=-w400-h224-p-df-rw",
        "source": "ABC11",
        "datetime": "2025-08-15T20:37:30.000Z",
        "time": "6 hours ago",
        "articleType": "regular"
    },
    {
        "title": "CBC News - Latest Canada, World, Entertainment and Business News",
        "link": "https://news.google.com/read/CBMiO0FVX3lxTFBJWHdsY0JKV0lnVXJacGY5TnN6YUVNTmx5b2FCaTZaWWNZYzdZSjdRU0hUQ1FHSzdUS013?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNVNVelpJVG01VFEwOW9aVTVxVFJDWUFoanpBeWdLTWdZQllKS0xJUWs=-w400-h224-p-df-rw",
        "source": "CBC",
        "datetime": "2025-08-16T00:22:29.000Z",
        "time": "3 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Just as Paterson, N.J., residents get water back, another small water main break hits",
        "link": "https://news.google.com/read/CBMif0FVX3lxTE9NM2g0UFB5d0RXNUZob2tVcGxYbHZmVktwR003TFdvTU8yNWp5QlVfZWVKTDIxQnREV3NoTmdTUDg1dWJ4TUNlSWJxcVZmT011Y005d1JEY21zTElBTC1hdV9iemVldm9kUEZ6dmlBcmZQRTlPMDFMTFV3dHhnUVE?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNWhkMWN6YzJJMGJVSXRNV3RtVFJDZkF4ampCU2dLTWdhQmNZaUZ1Z0k=-w400-h224-p-df-rw",
        "source": "CBS News",
        "datetime": "2025-08-15T16:50:00.000Z",
        "time": "10 hours ago",
        "articleType": "regular"
    },
    {
        "title": "3.6 magnitude earthquake rattles Riverside County's Mountain Center area, USGS says",
        "link": "https://news.google.com/read/CBMisgFBVV95cUxQeGpHQnZ4Qm0zZTNQbzV3eTNGNUdRSFJxbnRHNWFRemJndEc2bGI0aVZqc1g3Y2xBTkQyWmFESm1QZnI1ZEdkQzNWbENPS0MyaDF0SEc5azFaNi1FWGdoNWVNRHE3NUpoQzI5Rk5vcUUwM2xFb1ZHX0dyTWpZaUM4S3hOU0pRdXVTUkNwWnl4a2o4VDZMcXBXemc3Zmc1VDVHMjRoZEtPb0Z0enlpNXBRanJR0gG3AUFVX3lxTE5fVDZGWC1XY0lxd29mNnBocDk5eE5BaVhOVGZReHBQLTVxMkpYdm54U2hzWDhYSGJNcTR3M1RHUHBiRURtT0NjNGdueFoyN3VpVVFQY1hjY2JFT0tQdEtySmJFU3VuWm1mWG5KWkRkN2JWbXBic2swenZpWmRaUDBicE12dndVY3ZpQVVIdWhiZmtwZGN0aE11WWl5a1dkR1h3NHMtMF91dXd0NDZTWHpncTN3SUlPOA?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXBjMmxIVmxwS1RqWTVaREJDVFJDZkF4ampCU2dLTWdZWmNvcXJOUVk=-w400-h224-p-df-rw",
        "source": "ABC7 Los Angeles",
        "datetime": "2025-08-15T17:15:00.000Z",
        "time": "10 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Hurricane Erin to have impacts on Maryland well offshore",
        "link": "https://news.google.com/read/CBMiiAFBVV95cUxPUTk1ck4yTDBWaTg1cWNiSHJMV0p0cUFKSUhLOGNRZUk4cEdQQmFMbzc0Z3FRZi1QT1pVRDhkSFF2QUpnMG10Ri1fTjJSQkxBVnYzemg4cEdUNWI2NlFhOXJuWHZjbXZrc0lmdUxOTV9BTjR1N19VLW1ZMzcxSzVUZllzQ0lRUlNn?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iI0NnNDBiRkZ6Y0U5SGNUaFNjbVpSVFJDb0FSaXJBaWdCTWdB=-w400-h224-p-df-rw",
        "source": "WBAL-TV",
        "datetime": "2025-08-16T00:29:00.000Z",
        "time": "3 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Share your breaking news photos and videos",
        "link": "https://news.google.com/read/CBMiVEFVX3lxTE9NcUVBYk1DaV82WlRBaE51V1pkQjVZRWtDRE8zbWhnazNqd0dqZkgwQ2E2d0FrQ1RnbHhndzJ0bkdSc3c5XzNRSmxOTlFpS2xWenFQMA?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNWZTbkk0ZEdWU2VtMWFhRGg0VFJDZkF4ampCU2dLTWdhVnNwQkpPUVk=-w400-h224-p-df-rw",
        "source": "FOX 10 Phoenix",
        "datetime": "2025-08-15T20:34:19.000Z",
        "time": "6 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Glacier lake outburst at Alaska's Mendenhall Glacier causes record-breaking flooding",
        "link": "https://news.google.com/read/CBMiqwFBVV95cUxNYTJmVXg3ZVRySENDeU9uSnZnTk1WVFczUjdrOTUwZUlJZnVVZFRoYmJJNTBFWTdOTFNFX1RXMEpGaXd4eUY1c3RudV9sMllzVDFEZGpVUG9vZnJyQlQyUTg4ZHlDWm5ONkEtTndRMDI5TEhsT0ZzSDJFcDFVeUxrVm82WVJvRDhhMkVyWTFBS3VEc3ZZdkttWFAyTjNjaVVIbk5wLUF6bm9KcnfSAbABQVVfeXFMUDlWNm9TVFBRcUR2T0hDUGtta0doVmM3RjhlZWlHVXZlaFJwUUl5SHAwT291NjIzaGFvMUNESTkxNUhwVHdvcEx5ODdoVEJtSWV1RHFUU3NrdTZZRXQ2OGRSWVo0eDlaODRGQzZud2QxTzhzQ01aYXZOcU9FTko0X0QycU5pUnQ1QnBqd0JrLWFDY0dDVDFkRlBhWUhuN1dEbUZZeTFPWWc5bFVzQjFmS2g?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNURjemhPWW1OeFdUSk1XVlZxVFJDZkF4ampCU2dLTWdZQlM0SWdUd00=-w400-h224-p-df-rw",
        "source": "ABC News",
        "datetime": "2025-08-13T17:37:42.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "Unmanned ground vehicles ‘really crucial’ in fight against Russia: Ukrainian official",
        "link": "https://news.google.com/read/CBMiuAFBVV95cUxQc2JEaTBiTkZla18zU2lvcUppb1ZiUmlTbGxkSWdGZWV1UDdHTmxReFAwNXpoVnVjRGZpUngzVWZjYVB0WlJtZkVWM1NiakdFT0E3VHNkR3ZZZ0c1dXlGMDJ3WFFlbzNUWm12Y0Qwc2trVnA3eWdoUWlHVy1ieGItd0c2QUktejJPb2tlcWRQcld4V0VVSnJVcWxLOHJxYmJoVDZ3OWFRZU93QkRoTFlhN29DRjNiSmtN?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNDNObHBTT0VvMFN6Tkxaamt0VFJDZkF4ampCU2dLTWdZTmdwQ290UVk=-w400-h224-p-df-rw",
        "source": "Breaking Defense",
        "datetime": "2025-08-14T14:11:09.000Z",
        "time": "Yesterday",
        "articleType": "regular"
    },
    {
        "title": "Spain, Portugal, and Greece battle wildfires as heatwave is expected to last for days",
        "link": "https://news.google.com/read/CBMiugFBVV95cUxNeVdKMHRjRzRkclBmbDlQNzNxVXJrV256aUF6OFRyX3VpakZyOWtXRXJHUXRTa2Q3M0hhcXRGcExaRGp4VG05RnNIUVB4c1U0bExiZk5MQ25kaktQbDg4VU5XWGFrcWxPQU9sdmIzU09PM2lKdllZeHd0QXlCcmlLcjloRWtfUllGTkNKLWpBMWwwVnUyTkljN29DZDBSZTlkX3NSeHhzZlhYRmFUUm1keDFveGlPSW8yaWfSAb8BQVVfeXFMTl9Qc2pUd1ppUnNkUGIxaW03VUNtcExzdFZqNWtJdjN3ZmpSNVFkbzRPY3FnNXZzdHlSWHJ1Vmh0b2RSVHVDS3UwQ1JrOThmTW1zbFZpS3pwcHNRVFF4V0UycVRsWHJxZ3NuQzNhSklSVUViQm5qNGhfSS0xQjNuNERXc3J3SXFLQ0RjVGRWcmVvdHlPQ1c1dUNHdjdpWjlNQzNlZm5yS0xHbnpKZzNNSHBtWTJlUUNjMlR4MmVIelk?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNHllVkUyZEdRMlkxQmZjMEk1VFJDZkF4ampCU2dLTWdZaEJaRE5nUXM=-w400-h224-p-df-rw",
        "source": "ABC News",
        "datetime": "2025-08-15T11:54:56.000Z",
        "time": "15 hours ago",
        "articleType": "regular"
    },
    {
        "title": "‘Resiliency, personal growth, breaking personal barriers’: XTERRA comes to Ruidoso",
        "link": "https://news.google.com/read/CBMitgFBVV95cUxNTGh6UmE1S0hXVmZ5UHE3di04aEV6ckpDOWM4dFhWbHNKZGc5R3BsdEFISWRFRE5xcmNPaUN0aGU0V3BCcGlScS1tUkExT3dmTkFfOE9vWnJYTjgzMlZhNjZteUNfb2NmbTdtU3h4OWdHTWxwSXBvelN3cFpMemxmdld4cGctN2FTZnFPZloxX2p5amEycGlVUk5uMWFSTnNERkpfLXh5TjFnX3p0ZTEyWFZIcWFTQdIBuwFBVV95cUxNYnJjcGtxb1NBbHpIaFVtcUxCYW9vZlhNWkJ4LUhjN1B6clN3RHZ5RVBKdWczZ0lhaTRKM2lzNVNYWE9Bdm92TXo2MHZyQ2ppVGxMVXNtOVY4dF9mbmVtM1NPY3ZibnNFN1FYT0NtR2JWektvMktJYVpLZnlDSjR4b25mRHhLbkkwODBpV3ZKS3RPZGlOQTZZT0tGOWxDQ0FwV3JpRkJ6UGMwNWlwMENBS0JiZUw3c3BLOW5N?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iI0NnNXlUMHhrVUd4S1oybDRSM0J5VFJDZkF4ampCU2dLTWdB=-w400-h224-p-df-rw",
        "source": "KRQE",
        "datetime": "2025-08-15T21:30:12.000Z",
        "time": "6 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Breaking News: Water Rescue Underway in Chillicothe",
        "link": "https://news.google.com/read/CBMihAFBVV95cUxNRS1ncTB3Y0pmQmlyV0tBMHh2ZVZHYUQ4cEt4blZiaENOZHcyRFU0eWxaVm03VnVTaFh3NVhCcmNoNmEtMUF0WTdELU5XR3NwaGx5dlJ4NjRZNmZoS3lyYkp3d01UZnZvaXZnWVBqenpCbmh6SG1USmpoTHUxamk0cTJCQnI?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iJ0NnNURZelZVZEU4eFRHTlhVRWhWVFJEZ0F4aUFCU2dLTWdNOU5Ddw=-w400-h224-p-df-rw",
        "source": "Scioto Post",
        "datetime": "2025-08-15T20:18:12.000Z",
        "time": "7 hours ago",
        "articleType": "regular"
    },
    {
        "title": "US immigration news: Benjamin Marcelo Guerrero-Cruz, Reseda High School student, detained while walking dog in Los Angeles, CA",
        "link": "https://news.google.com/read/CBMi5wFBVV95cUxNYUliaTh1d1Q5UGlVUzV1V1FfajhMZ2RfSjIxNTVzQzJ2QW9kN2Y5NW1YeVRteVhBZW5ZRDFvVjJBeTF1UzJyZWJIaHNGSGhQOFJqSGNRdVItZGlGTHJCQnI2OU1CVE1fcEk5cjA1cEIweC1qZkhBRFhrMWt3M0xpMzlfcGJqVVZEQ002MkR5TmR2bVFIcWt6TWdhU0p2VWpkQzlVN2pfZ0xDR0plS204ZVZnX3A1Uld1cDBCXzRtdVVtc0JMaWJNRnNvLUJlbERjU1FMeUFkZjA1Zl91MTk5dlJkUmthWUXSAewBQVVfeXFMTW1sZ0JYZXV0aGJaMnRrRzhZTW9QWVU2SWpweEZmSUFDY2JMTnRQY2Vld2d3SHhhVUxpSEdTdEVJdXI2RDBzaHJqWGJmOHh4Z05oZTYxUWRjV19UelRPckJVaV9PTFdCVTI3bEVFZzBEWFFBZUFmbjVwZjFEaTVoOVlFNEdaYjlhZWU0X1E1cmxjaGVrNnhrYmVlMldyVFQ3Y2NFMHJoSU51d29wRjE1TjUzVWhRSi1SMzlvZWg5VTdJUS1XUEpGa3RUMERYSmdSOEdvaUl4ZUNBSHpaV2JSUjE5TWItYnJjTU13amQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNDROakJOYUVZMlNIbFVWbkJ0VFJDZkF4ampCU2dLTWdhUk01eEhIZ2s=-w400-h224-p-df-rw",
        "source": "ABC7 Chicago",
        "datetime": "2025-08-15T15:11:15.000Z",
        "time": "12 hours ago",
        "articleType": "regular"
    },
    {
        "title": "BREAKING: No deal on ceasefire in Ukraine",
        "link": "https://news.google.com/read/CBMijwFBVV95cUxON1R4VWJIXzljeHFqZkhFQU9zeXJ5dHZnbzhpSUlQb0UyZkNZVXRhV3pOaThsMjB4REpBTFRiczJSQ0tKV19sRXppbUZjTTZKQUdKOGF3VE94cnpLcWNTOFFhemlhdzZvSUhUWEhaZF9xUTlpam02NzZVbnJCQVVIM1BSekZOdk12bmJkSGJfQQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNUJRWEUwTkdaZlIwbGhXbTVwVFJDZkF4ampCU2dLTWdZdFpZcXVyUVk=-w400-h224-p-df-rw",
        "source": "Kaukauna Community News",
        "datetime": "2025-08-15T23:16:17.000Z",
        "time": "4 hours ago",
        "articleType": "regular"
    },
    {
        "title": "The 19th wins National Murrow Award for 2024 coverage of Biden and Harris",
        "link": "https://news.google.com/read/CBMikAFBVV95cUxNdzNYMDRIU0ZfSmJaMTk1NUMxdlFzMXhOZ1NpazFEQ3JHbjVlZEtBZmtza2gtQlN2TzE5NGVSaDY2VFdBa3FIczM0ckJral8xLTBmRkhlaUF5MDluaG0tN1VyWWlLTU0zcl9jZlRYQjBld1o5dHllUkZacVJjR0NWMWxtLVZydmo1a2dvN0tuVjY?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iI0NnNVhPSFp5WldwemEwUjNMVVp0VFJERUF4aW1CU2dLTWdB=-w400-h224-p-df-rw",
        "source": "The 19th News",
        "datetime": "2025-08-14T17:56:12.000Z",
        "time": "Yesterday",
        "articleType": "regular"
    },
    {
        "title": "Bend and Central Oregon again top AAA's list of favorite Labor Day weekend travel destinations around the Northwest",
        "link": "https://news.google.com/read/CBMi6AFBVV95cUxPTFZKc2RFY0pZRnNXbjl4bkphUVktRDNhckxEX0MtZC1KZlVfWG1fRVNzQzJYcUVTc3BXbzQ3NnZpZFF6T1UteTljQzhGS18zZVc1QXVPYjV3cFhWeVJIXzYxM0VzUzFoeTU1cEMwTkRCb0prYVp0LU14NjRMZWRsZ3F2Ym9HRmgzd1Q3YlpxY3h3c2hDR3Y5MjdweFZGS0J0OTBxUnlzNjZNWFFieV9EYmV2SF9NXzJpTjU1Y1FMMDNKQld1eDBrdHg4NTJaWjduMll5b3FtVVR4QnoxZjB3WXJYMVdndXBB?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNVBlUzE0TVhrNWVHeEZhM2QzVFJDZkF4amlCU2dLTWdZWmNvcHNzUVU=-w400-h224-p-df-rw",
        "source": "KTVZ",
        "datetime": "2025-08-15T22:11:37.000Z",
        "time": "5 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Deadly crash involving truck shuts down Route 30 in both directions in Adams County",
        "link": "https://news.google.com/read/CBMijwFBVV95cUxPdjhoRGxtV2RfWUhMcDhYc2V1RG43WmdGa2RqbFFqRGFPN2ZyTkk5WlJJSkZYbHhLc2FrTGVhanRqbVlmaVdSaFZjclhWRHhzVmZVaFNoLXhIRFJWaXNlMFJBMldGaWNMeE81WEhveW5sOUdrUlE4eHNPOTI5SnlzcHRhTEtGcWxXd3ROU0FQaw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iI0NnNVFVM2RRUjFwRGFYcFZXblV3VFJDeEFSaWNBaWdCTWdB=-w400-h224-p-df-rw",
        "source": "WGAL",
        "datetime": "2025-08-15T20:08:00.000Z",
        "time": "7 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Live updates: Today's South Florida News",
        "link": "https://news.google.com/read/CBMijwFBVV95cUxOX0w1S2hyVG9iV2JjY0VQWk9BWUJCbGo5eVJiNGliX3pQUjRWUVk4RlUyMDVjT3NfaWo5LVF3bk9hc0dXTVZzdVk1YW9xRDhWSG1KeE9hSllsRW1GZ2FjclVZWHJ2Y0tyUGdzTW1UdnJ0dVZldktrY0FMbXFZM0tlNFNlWkhqOEx2MGVIRWVyb9IBlwFBVV95cUxNRS13UlVISlNRSXIyUFJzSWFMWDdUdl9jSHBIV3FUc1pQM21qeFZPX1pGSnFVUjRuTkkwbnV3cXZHNzM2LUNOUmNlSHNHSm1XdjFyM25Tc3VEWXFUM0VBYXZUWU9mUlF2b0RIUDJpX2VaYThFZUtqa0VKdGQ2ZjRhTFUxdE5acmozeFMwM3pqdHRiOE9ldVl3?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNUlTa2d3VUY4M2R6SkdlbEJCVFJDZkF4ampCU2dLTWdhRnNaUUZPUWM=-w400-h224-p-df-rw",
        "source": "NBC 6 South Florida",
        "datetime": "2025-08-13T02:49:40.000Z",
        "time": "3 days ago",
        "articleType": "regular"
    },
    {
        "title": "Breaking news - Chuck Collins is retiring!",
        "link": "https://news.google.com/read/CBMiiwFBVV95cUxOQTN2RnRVV2N0ZGp6R3BtM1pFNFdwZG55VnhzclBValV1ZUNzbGtjNHpKb1hXV3RrMXRnYk5aTktxN0RjS1YwT0lLN0ZYTEwxZFRNTE9aZEhRTFF1MFA0V0FXempmVjNpOVk0WkVKNDc5RGItQnV5eTB6WXFiTkNmM3h2d3JOYWhzaTRJ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNURVMUp2VkVSNE5tUm9NSEZFVFJDSEF4aVBCaWdLTWdZUmRKSW9yZ2M=-w400-h224-p-df-rw",
        "source": "25 News Now",
        "datetime": "2025-08-13T23:27:00.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "Chuck Schumer accuses Trump administration of 'breaking the law' in withholding Epstein files",
        "link": "https://news.google.com/read/CBMiuAFBVV95cUxONHMwTUNIemtIbE1GUDR3SXNnbDdjVlFUdkZ3RUVBWHlsY1gyaEc1R1pkRlUxUzdoSDJnSTNxcnp4MkxDRnQzeHcyaDUweWJyNzlBSWdicEhKdkJJaXdCTFM0bHlZbW53cnVVRHVIeWFuMUpIUXptUFA4R09yNXdUYUctemp2V1k1VHFGZXE5bGp4cjRGeDVFZ1VpWWZnM19JUnE2NjNMTU1zYktmSXdHMExHcWtsVmx1?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXNYMnQ1YzI5SGVtbEZSM1IxVFJDbkF4alZCU2dLTWdhTkJZRG5GUWs=-w400-h224-p-df-rw",
        "source": "Washington Times",
        "datetime": "2025-08-15T20:21:00.000Z",
        "time": "7 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Consumer sentiment worsened in August amid sweeping new tariffs",
        "link": "https://news.google.com/read/CBMipgFBVV95cUxOdThVby12SnRFMWZmUnBJU3M3OXJJcFI3clNrc1h5ZFA3SXEyVk93d0ZndUdVRzVGQWx3WHl6TkE4b0lqc3Vpb1E5LVRyMDVOUXM0TlRhWmNPNm9IMXBfUzlYdE5nSm05RWxCbmxIWGdBRzMyb1puWmc3cmFPMUtUQ1YyMEhVZEt6TTk0UUhfS2FHZTJJZkdMVTJGcGhKWVJRaDBGN1pB0gGrAUFVX3lxTE4ybl82RTZPbTl4Y3V3SWVCZHBPZldCcVFwa3QxQVo0dUZHaU51TGFfR3F4bjNfTGpUMmlvX1JyNC1QMWZlT241SVlIdUNJN3FwNUxpTkU5d2xHRnJ6Y1pwdE1hWkVVb1F4YXktdUFwQnFWTk1tREs1bFhqbUpfWHhxQ1JPS29oZlpSQ0JYXzEySDZKdE9oV1I5aVdETEpYSWlxUkFFQ1p1QWQ5WQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNVhVbmgxUjNCTlRHVnNTR1pZVFJDZkF4ampCU2dLTWdZQkVJZ0hwUVU=-w400-h224-p-df-rw",
        "source": "ABC News",
        "datetime": "2025-08-15T14:25:08.000Z",
        "time": "13 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Lynchburg Weather",
        "link": "https://news.google.com/read/CBMiPEFVX3lxTFBwdDd6b1dMdUtsZjNvMzlHblZwaTY5N0ZhNWh3NmJMemN4ZkpYRVJYQ2x0NDBTQmpXUEVOTw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNVRORjlIVkY5YWRVNUdlRTg0VFJEQUFoaTRCQ2dLTWdhMU5LU1JHUXM=-w400-h224-p-df-rw",
        "source": "WSET",
        "datetime": "2025-08-15T00:33:45.000Z",
        "time": "Yesterday",
        "articleType": "regular"
    },
    {
        "title": "10 Leftover Thoughts on the Patriots Following Joint Practices in Minnesota",
        "link": "https://news.google.com/read/CBMiqAFBVV95cUxQdlBoRnhGcmE1NWYtUUFqVGhmOGNrM0JzWDdoZm91cmloeV8tbkdaaHJEZENudjVMeTNKQm4zTGl5a09uUXotdkJGTThIOUpaRDVyYkhXN042T1h2VzBEZ21GUG5TU01hWHM5WnI5dXN0WjE2NVJ3cUw2YUY5UFpyTWNuWXBXUVRHMVgxSnJHcE4tdmpabExRTTItSGRLRDRDYThibGNFVlU?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNVZjR0puVlRWU1ZVZDNTVGhyVFJEc0FSaWtBeWdLTWdZQlFveHdtUWs=-w400-h224-p-df-rw",
        "source": "New England Patriots",
        "datetime": "2025-08-15T10:02:14.000Z",
        "time": "17 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Man killed in crash on Blanding Boulevard in Middleburg",
        "link": "https://news.google.com/read/CBMivgFBVV95cUxPd0tzdHR0dmlRMkgyY2NhWUdNbHA4UVZyZm9EZlY3Z1ppWnQtZ3E2THhLcU80dWMwM0lyU0lFNERVSmdiN3h1b2RIM3A2X21NbExjSTgzbnYweFF5SHlxSUZzTXRQbGM5TF9YbThDUm1zbDVnbnBWZERjdkFMVUZZblF6aGpjTnJtOVRCRnRmclRpbFZMWHZ5MjAxcEk0cUVYR0xLcHkyMUxNWFNuT3ZzVHV2OUdHQmFpUkllYmpn0gHSAUFVX3lxTE5nWUFmV3VqZXhNOVBvaFc3NHlza05xajRDZkFyZEg5OFlFZUozR3hKclRGeC1uNDJRQ19XTzBvSGZkU0k4UW4tbkRvdFpWSFZsamlEVjd6ZnVRbVIyajBXaklCZ2hoQ2JqNUlHYjhlRTQ5bVRtQUxnRERQUXotZFlyc3gyeUV2RlltRGlTZC0tYXc3bXVvZlhoWXZqdTJJeFRXTl9pU1RBOGEyTS11a21teDgxSzVKdDAyMjZvQUNnMzBFek5uMmhjQzN5ckJWQmlBUQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iI0NnNW9UVmxaUjJkUk9WazVaalpPVFJDb0FSaXNBaWdCTWdB=-w400-h224-p-df-rw",
        "source": "Action News Jax",
        "datetime": "2025-08-16T00:01:00.000Z",
        "time": "3 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Suspect still at large after woman shot to death walking child to Louisville bus stop",
        "link": "https://news.google.com/read/CBMikwFBVV95cUxPY3pkWUp6NWNMVDVjNDNoXy1mNF9WQW16czdsQURTQUh0WGhDdDRVblI5aVBmQ3RIdDVzTHdfS0ZQUV9jeUd2ZmIyS3ZVcGJBUjRIQjlMS19qRUE4NnR5YmhiRkZTZG5TVVkyMFFlYXphWEZGS3dGMURqYzVTQlZENWQxN3Q4cl9wMVNrU3BfWnNnS2M?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNDRUMnN0TW05bFkxTlRXVUpwVFJDZkF4amlCU2dLTWdZTllvREdZUUU=-w400-h224-p-df-rw",
        "source": "WLKY",
        "datetime": "2025-08-14T16:33:00.000Z",
        "time": "Yesterday",
        "articleType": "regular"
    },
    {
        "title": "News Stories",
        "link": "https://news.google.com/read/CBMiVEFVX3lxTE9xd2U2djlVTUxEU2NkZEZZaS14QjFvYWtvaFpiQXNQQ0RIYTJrcmt4UnE1d2hjVnk4eTdGRzV1amtnR2FxS1JibGpXTERZZzE4VkkyRA?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNUpSMEp2ZUZGeFgxQlpTaTF0VFJEcEFSallBU2dCTWdtQmNZYUZRdVZFYmdF=-w400-h224-p-df-rw",
        "source": "U.S. Department of Defense (.gov)",
        "datetime": "2025-08-12T07:00:00.000Z",
        "time": "3 days ago",
        "articleType": "regular"
    },
    {
        "title": "Live updates: Today's South Florida News",
        "link": "https://news.google.com/read/CBMiowFBVV95cUxON1I4SFZUZE12Und1a0VHMV9laHk1Qjhqa2VhZlp6Sl9EQW9BSlNXRkcwT3hlRWhqTkROM0dpWk5rOWE4M2V4WkoxSldCdnFWUFRTZV82QXM4WktlZXhYV3RZUWNRNXdHTXN3SERSQTdnSTVRanBha0ozV1Bla282QnhDaDRXT2tyVTY0WDF4VVdFNFZXenVSLXV5cGd6cG1oWURF0gGrAUFVX3lxTE56Vm95QXk5MUE4b1NsUkZnRlA3LWFoQ1kwa2lLalRDTGNoMWhfZ1BMOTZuVlJweVl0THNOV19CSnBJYUNrYjdZeHRlNmdzVXZtM3lCMVlYNm4tV3c3b1E1bmtfLXRneFUtODM0ZGJCandrUm01UVJpb195R1B2dXdhcG9IQWYtRkZHOG4tY0FRa1FmQWhvZXd6dU53WF8zYUpZVE9hd04yQ200bw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNUlTa2d3VUY4M2R6SkdlbEJCVFJDZkF4ampCU2dLTWdhRnNaUUZPUWM=-w400-h224-p-df-rw",
        "source": "NBC 6 South Florida",
        "datetime": "2025-08-14T02:43:51.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "AI flight software maker Merlin set to go public",
        "link": "https://news.google.com/read/CBMijgFBVV95cUxQTmI3Uno1MkxWTnlRMHpXSC1MUmJhYjhOb19aNWlxaGlwMFZmQmJ4Rklwd0ViLVRYRzM3eHd0OEVyYTRRMFFTUlNJTElXekZhN1RtSXNCSjRuNE5TUk1RVHZWOEVtbWdQM29aTTV5elNDc1p5ZkViQlE1c2xXOW9SM19lLUZvY0xJVUFub2pR?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNVZTVVZYVms1RFUxbFVTREprVFJDZ0F4amlCU2dLTWdhTklveUlJUWs=-w400-h224-p-df-rw",
        "source": "Breaking Defense",
        "datetime": "2025-08-15T15:13:00.000Z",
        "time": "12 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Fayetteville Police searching for armed robbery suspect",
        "link": "https://news.google.com/read/CBMimwFBVV95cUxQOXZBay04ZnlpVW5BNmhFTUF5MkRrZ1p6dWJPWkx6N3JMQWl3NGtxNzR3eWF5Sy13dWNTZXktaUFsLU84Q2NwSWI3djAtZm9DakwyM0dtdy00aHBlUXJfWkZGWDBkQTdQR1Y3SmwxUGhFY3lHNFZxNzIzRDNWSFFvNnRqSW54RUZqRko5dkJZWGZMUWpwc05xWk5yaw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNUdkMmcwYTJkaFFXOWZaa3czVFJDb0FSaXJBaWdCTWdZZEVJUUtHZ2c=-w400-h224-p-df-rw",
        "source": "KHBS",
        "datetime": "2025-08-15T14:10:00.000Z",
        "time": "13 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Former MMA fighter convicted after breaking wrist of son with special needs",
        "link": "https://news.google.com/read/CBMiowFBVV95cUxPa0lxRzdqR3pZcWxoOW5Xb3I0TzY4T2RWYXR1aFowVzFkS0hlTnE3NmxHbmZpRmJ5bEQ4X3VUTkNSSllraGhQdWRlRXlnUV81N0JFUFpfWXhtRnAycFgxYlduZHNEQ3BoNlNvdk1lbURZS3d4N0NKSkhPQ0NadFNtdFlmd1VlSXZtQ0lvQ2Ruc0pEclpnclVfLTRvNk9TNXpUcm1j?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNU5RVFk0UVZabmFVTm5jbVpLVFJDS0F4aXhCU2dLTWdhcFpZVE5MUVk=-w400-h224-p-df-rw",
        "source": "supertalk.fm",
        "datetime": "2025-08-14T18:03:45.000Z",
        "time": "Yesterday",
        "articleType": "regular"
    },
    {
        "title": "Breaking down Trump's Nvidia-AMD deal and the latest artificial intelligence news",
        "link": "https://news.google.com/read/CBMipAFBVV95cUxNQ0l2RGdsNElHNXNkTkxuTXZiNkpOQkZKMzI5ckJKb19RRzJUOVlBTi1NWFh3SGs3cDVmN2x2VFhqSW5ETDBqYTNxZ2VSN2pPdGxIRzFsWGdxYnE3cXMwX3d5T3NTVzZpVUFVNUw2Z1hVYVVBcnowVzNJRS1QSW5iT3NjWXpmLTRPR0FRTUYtWlBsS01XckpzTE1hZlFYYkRXLTJ0TQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNHdVVmRHVkRFNE1VZ3hiMVpLVFJDZkF4ampCU2dLTWdhbFpJNnRzUVU=-w400-h224-p-df-rw",
        "source": "CBS News",
        "datetime": "2025-08-13T00:16:00.000Z",
        "time": "3 days ago",
        "articleType": "regular"
    },
    {
        "title": "Breaking News Live August 16: ED raids Tamil Nadu Minister I Periyasamy, family in money laundering case",
        "link": "https://news.google.com/read/CBMitAFBVV95cUxQWTZKZy1aMVk1NnRKYmNOcG95aWlBV0JPcW5adVA4STNKMVZYbHJMY2tnUWxuTTRXdXFlblV4b2pxNHp4eUg3OWptVlZveUVSLVBEOEJOR1FRaXluUHk5V2hoYmJPdHRSWWNIcTBaOEtQdlQzbERyZWlBTzJMZzNJT1VmeGVBOGF3djNNVG9ObUNIV2ZNNjdnNDNoa1pQdW45WDAyQTNyVnlJeTZIYmgydjlKLW4?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXFjeTFmUWtFMVpXOHRZV1JqVFJDc0FoaVFBeWdLTWdhQm9wQXFPUVk=-w400-h224-p-df-rw",
        "source": "Times of India",
        "datetime": "2025-08-16T03:22:23.000Z",
        "time": "8 minutes ago",
        "articleType": "regular"
    },
    {
        "title": "1 landscaper killed, 1 injured in Salem after coming into contact with power lines, officials say",
        "link": "https://news.google.com/read/CBMigAFBVV95cUxNbzcxUDlSMUYxcW9UVmhTUmJWamZVd09aLU9ENVVBVEhpemRObzdpQjZvRk9Jbi03aXRxcVhHNG9zWXhqazdzNV81N0xBVEFrLVhOWG9aVG05UURmaHdJT3c0UHg3WlBld2tQQk1oQUtCUU5odDV5NFhvT21qQk5RWA?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNDRZa3R5UzNsTVVHeEtZblIzVFJDZkF4amlCU2dLTWdZQlVJSHc1QUU=-w400-h224-p-df-rw",
        "source": "WMUR",
        "datetime": "2025-08-15T03:42:00.000Z",
        "time": "23 hours ago",
        "articleType": "regular"
    },
    {
        "title": "The Market May Have Hit Its Liquidity Breaking Point",
        "link": "https://news.google.com/read/CBMimAFBVV95cUxQWTdEZkprT1QxN1VKd1N2YnB5N2d4U1pmNGlWNDA0NV9NY1c3RVY2c2ZJYW1qV2NWeXVybEJtR0VEc1h2ekpEdGNRbU80VlpCQmJkb05NVzg5VV9YUzRoWjNjQmcyZ005T29Xc2QySnp0S0lhbUhYZ1FEbmQzejJGREFzeHJxYW9Pd3BFNTNlZ1NnTnF2MmFMMg?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNW1abTlNWVhFM1NqUjJORGR3VFJEdkF4anNCQ2dLTWdrQm9JWVpNR1k5c0FF=-w400-h224-p-df-rw",
        "source": "Seeking Alpha",
        "datetime": "2025-08-15T16:03:23.000Z",
        "time": "11 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Video. Latest news bulletin | August 15th, 2025 – Evening",
        "link": "https://news.google.com/read/CBMikAFBVV95cUxPbW1jVEh4Yk1tblpsWEhUX01UNEhSR2w1VHdVa2tJcHMyQ2RwYVMwU3FleEtKeWJyZTd5Mk9nVVpxTXh0MXZ5d3lNbXJJSTRjYWVVYkFDbXB5MzJHdmN5NXh0VTR3UGlOcXd5b0tPWU5vak5CczBSWVZlelo2WVNEQzhzWjNmWnFaNTJuNDRtVlc?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNU1XV2hHTkVkRU5rTjBRVVJSVFJEekFSaXdBeWdLTWdhQjFvcGtUZ1E=-w400-h224-p-df-rw",
        "source": "Euronews.com",
        "datetime": "2025-08-15T16:00:29.000Z",
        "time": "11 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Marisa Iati Named National Breaking News Assistant Editor",
        "link": "https://news.google.com/read/CBMipgFBVV95cUxQSHVIUDBPajBKMG14RXE5VVhFcFdSOElzV3ZiQXJUTWkzZ0UzLVROakNRcnh0UmV3M2RydDVWQ2JYMlZGeTFXS01oVEs1ZmFXdW1wMWNzU0tWcjhxSktZY2h0di1tVHdIWFhLSFNpTndHazJmZm12Tm0zbDJ6NWZnSFFheWMyTVhnQld1azhPWXFoYmtkS2xMdFV6M1RxNUxHZ1Z5aVdn?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNVVjbE5QT1dReGJHaElMVmxYVFJEbEF4ajRCQ2dLTWdZeFpaYXZKUWc=-w400-h224-p-df-rw",
        "source": "The Washington Post",
        "datetime": "2025-08-12T03:00:21.000Z",
        "time": "4 days ago",
        "articleType": "regular"
    },
    {
        "title": "Trump warns Russia of 'severe consequences' if Putin doesn't agree to stop war",
        "link": "https://news.google.com/read/CBMirAFBVV95cUxOWFNfeGFqZmYtTWxuODBTNHAwZl8zbTJNZ1d4RjBFUFlaZ0duTEZPaDB0TGxLejdBM2xJb1I3cjZnbUR4UExLbW84eGljajVZM0xTTEJZNk9kMmRuZGVYUlVjSE1zR2RQOXBtNHd1ZFhyb3E5SlFXS21JSXNIenJMS0Z3YTQtTDc4aUw4VzBrT0Z2eERaVXZOd210aEJzVFpELW5zcnRMM2tXQk960gGyAUFVX3lxTFBlZUNsRmtGa2owY1NKVVhGbEF2RjdvQm1ReV9HYVFxTWN1eGJ1T21nTllSZS1wcjRFb2hweGNwMFBhZ0kzOGJUa3lSYXhKS24yMkYtT2E1enJ2aTJwV2g5UjZHZGw4bDlCRTdBbG9OSW5NSXZWUWlYVXA3dGFRYlotSnZNbDZqdGc3LTNyVjRPT2ZBZDkyY3FfUHQxYlZrSURkUV9OVFE1Um9kVnBsNjFIUXc?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNWlUamM1YXpKblNGSjZSMTlsVFJDZkF4ampCU2dLTWdZQlVaYUVwQWc=-w400-h224-p-df-rw",
        "source": "ABC News",
        "datetime": "2025-08-13T17:37:30.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "Tropical Storm Erin tracker: Latest path, when it'll strengthen to hurricane",
        "link": "https://news.google.com/read/CBMinwFBVV95cUxQNzVVaHhLYkU5MzlmN3h5MG1ueEh2dFZPQnZ5Wnl5OWl4eU9NQldXSmZmRllfRTdPcWJ2Z2RRS0FueWVQckVwZENGLU9UUE1lQmN4elhlVE9hcklsTmszbkdDeWxMZGhOSWNmRzd3ckxVQVczZVc5N0t4WDdzeXV6aTFlVTNFb1BELUdsQlN1NWo1SGhtcTdMeEYxYzZSZGPSAaQBQVVfeXFMTzdIR2dTa25mY3hUSGxHNEgtczhGMFpxSk90UFFiXzVOQnJrOWhuV01xMlJfazdqcjI3MGNNeExBZHZvWTBjQkM4SmtNLVZhYzlsV0JjektpQVlWNmZpb3cxYnd0aTBoLUxtWXFJcURicUhWZXZGVk1jYjZkUHVxM2pFa3V3Ti03N1Zua3l5empYUGZkOV80dkFOWS00bWJqbUk1Slk?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNHdia3hFWTFReWJGaDNkSGx5VFJDZkF4ampCU2dLTWdrQklvUkNWeVBvNndF=-w400-h224-p-df-rw",
        "source": "ABC News",
        "datetime": "2025-08-13T15:28:39.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "Birmingham Weather | News, Weather, Sports, Breaking News",
        "link": "https://news.google.com/read/CBMiQEFVX3lxTE1hMmpONVYySkp4SUZIMmZidmd4VEJLaXNUdF9OQlNsRzhTUjVNUkhUdWRSSmZjY0U5Ukk4elNZM1M?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iJ0NnNU5VWFZFV1dWaWEyTkhOR3cwVFJEQUFoaTRCQ2dLTWdPcE14WQ=-w400-h224-p-df-rw",
        "source": "WBMA",
        "datetime": "2025-08-13T10:52:30.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "DC sues over Trump administration’s attempted takeover of city police",
        "link": "https://news.google.com/read/CBMifkFVX3lxTFBCYTBpR3U2WTVvOTZRamVhblVaMVgzX2c4VFBhV0F5VmEwTXVzR2FRVmNlTDR3UzJWdFR5WkhjQnphU3gyQWljcENVcFhiTjFScFRMN2R0VXMxU000RHhMX1lRUDRsZUY2bmpfTjFqNExvYThmUnZuQ2FkT3RhQQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNVdUMnM0WVdkTU5VOUplRlE1VFJDa0F4ajJCQ2dLTWdrQlFwYXJuZWlvYXdJ=-w400-h224-p-df-rw",
        "source": "Politico",
        "datetime": "2025-08-15T17:03:32.000Z",
        "time": "10 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Fox News shares major breaking news alert as D.C. takes stand against Trump",
        "link": "https://news.google.com/read/CBMijwFBVV95cUxOTFJHdUZPb21XaFo4YUNyMy1jX29FVXhaVmF5ckZVU1V6M3k0OXZUQl9tbjdxSWI4dGNFTkM4VHdLTFA1V25vSHlkMkZsU2xXVG9lRnZTNGg5TGk3SnQwY2ctSlgxQVR3bW5IT1dhdHdVbVRIUEY1R0E5MXBjU2hENk03SklyODN2dGF0LUhUONIBlAFBVV95cUxNeXNrWU9XaDFjWm5HUnh0RWU4MkVmLThQTGNaSkswZWxMQWJlTnFvY2szUjMwSVBIazE2ajZCWE15SkNvWV9ZRkYzVlhWVHRoeUNGdUhhbDFxblg0ZnAxVUxCREpoZmRtN0lGTlZ3SDZCUDMwa0RTbDJ3MnUyY2ZuYkJXZmo1VUVkOXdGY2RSU3pEWFNW?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNDBaelZVUjJwbE9UVm9RbWgxVFJDUkF4ajhCU2dLTWdrQlFwS05wV2loTEFJ=-w400-h224-p-df-rw",
        "source": "Daily Express US",
        "datetime": "2025-08-15T15:02:52.000Z",
        "time": "12 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Hurricane Erin forms in the Atlantic",
        "link": "https://news.google.com/read/CBMia0FVX3lxTE5GcU54ZnkzbC1zejlYQ1lSTXdHZ2xlcjBmdXUyNERQVk5mVTNhb1pwbjJaTjFGTmstQUNOQWoyZExSdFlJZmdXLWZwYTVzdTY2VEhDdFh5ZzdaSTdpYnV4WHoyS0dxSWdsakxZ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNHRRVXByWWswM09ETnlVMDVLVFJDb0FSaXJBaWdCTWdaQlFJRjU1QUU=-w400-h224-p-df-rw",
        "source": "KCCI",
        "datetime": "2025-08-15T15:14:00.000Z",
        "time": "12 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Man fired 180 shots, breaking 150 windows, in CDC attack",
        "link": "https://news.google.com/read/CBMimgFBVV95cUxOazhZbk5EeXgzRzlQX0hCZnJ3TGFqamo5NWVwNFFHQlNJWXA1c0ZGZjhfdWFob1Q3Q1dfRW14bzJFa2hBdG5iRFA3T1lVUnhiek1oOUFLekVvMXRwR3M0alo3Q0M0eWZrQ1lSek1LdV9TdlBWNU95eVJzY1h2VXpDSU1aMDhoX3lMNXh0czdtN3gwd3VkZWo2b2Rn0gGfAUFVX3lxTE5KazVKZVhvUTZDd2lzM0RGaDNQR3JXUHVuM1lYU2hxZ1ozZEJ0akxidEQyUlJVTDQ1VVVPYmpXTHJwaUs0TlFtak5tcTRZbEhnOV9CTU9uRnVVN3g2ODhQWjJvanVHbGpzM2VwSUowQ2p1a2oxLWh0M1hTRnZYR2ttNE9OSlFpNTRlZlQ5STdJc2F0SVF3Y2dBWkpyQkJyaw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNUxkVGd6TTFSQ1pVYzJZek41VFJDZkF4ampCU2dLTWdtQkJJNkRpaXByaWdF=-w400-h224-p-df-rw",
        "source": "ABC News",
        "datetime": "2025-08-11T21:41:51.000Z",
        "time": "4 days ago",
        "articleType": "regular"
    },
    {
        "title": "Country Music Icon Garth Brooks Announces ‘Breaking News’",
        "link": "https://news.google.com/read/CBMickFVX3lxTFBZVXJROU5VSFBZV3gzc0hxUlhPQzhjUmFyOVBzU014VW9ETEdYdjFxbDhzTUFjSnBscFhGUUZfdGZoZWIzTGl4UlNFZHhtQ3N3R0NFMzY5WU9XN2hnekwtUy1tSGYwUUNsV2djUk40UzZsZw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNW1jamRXU0VWVU5FTmFURzU1VFJEZ0F4aUFCU2dLTWdhaEpJcEtsZ28=-w400-h224-p-df-rw",
        "source": "parade.com",
        "datetime": "2025-08-13T16:10:57.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "11Alive News Midday",
        "link": "https://news.google.com/read/CBMiqgFBVV95cUxOeEEtTHBpc0tibjg2S2pKX0hnVGczR2N0dnpDaWtCWnhLbFNRMUFmM2k5bkNfRS14czN2UDdlRzlGaVpNWERneU1MYUpIVTFiWjZqQjNRNUVvajQwaWRPdTFfTUhIeGhTVDJuaG41a0JFdk82T0p4aHFWN1VJdllSNmZ3c3dPN0FMSWtaVGZZZXEzVWtNNWEzVkExaTFXQ3NiOGVIa2prdjBUZw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXdZazQ0T0Y5T1drOUVTVlJMVFJDZkF4ampCU2dLTWdZZGdvaHJ1UVE=-w400-h224-p-df-rw",
        "source": "11Alive.com",
        "datetime": "2025-08-15T15:00:00.000Z",
        "time": "12 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Two dead, multiple injured after explosions at US Steel Clairton Coke plant",
        "link": "https://news.google.com/read/CBMie0FVX3lxTE5WaUk4OC1jU3BvWU10Z3JoX2pNZlNBNTBYOFZDbHl0X0RibmJlWktEWXFJMFlFSTJLYXB3bDhQRnZFdE5qY0VSTFJsU3puWmZkTFRhejN1ai16LVhtM2JvTDhxZkJBMFFQZW9BZXh5Z3hBSktnd3QyMVNZbw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNU1abE4zT1VzeFRtTTVRa051VFJEb0FoaUFCU2dLTWdZZE1Zb01xUVU=-w400-h224-p-df-rw",
        "source": "WTAE",
        "datetime": "2025-08-12T22:44:00.000Z",
        "time": "3 days ago",
        "articleType": "regular"
    },
    {
        "title": "BREAKING NEWS: Japan's key stock indexes close at new record highs",
        "link": "https://news.google.com/read/CBMiWkFVX3lxTE5yRkdwRVo0NjU1ZG16dklxZG81WHpmZzgyNU1EUGNLMHBEcUdveVBQclZWLWRiZmNJc3h0RUNYVm1WRmpKbVI2T3hHY2R3b1d5aG92OU5LaXM0dw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXJiVXhxZEVoWmFqWnJibk4yVFJDZkF4ampCU2dLTWdZaGxKSnN0UVk=-w400-h224-p-df-rw",
        "source": "english.kyodonews.net",
        "datetime": "2025-08-15T06:33:00.000Z",
        "time": "20 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Albany Weather | News, Weather, Sports, Breaking News",
        "link": "https://news.google.com/read/CBMiREFVX3lxTE5IZnFsSUxVU0tCSTlqUm9IYUFya3gxQ3pqT2xnaVoyLVVZOXA5UEFaTmhNd3FtU3FIMVJwbE1YbTBzb3Vt?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNXVkRzk0TlRKNGQybHpPVWxuVFJDZkF4ampCU2dLTWdtRklZYTJrQ3ZKaUFJ=-w400-h224-p-df-rw",
        "source": "WRGB",
        "datetime": "2025-08-13T13:18:45.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "How Sophie Turner Accidentally Caused a Celeb Couple to Break Off Engagement",
        "link": "https://news.google.com/read/CBMingFBVV95cUxNVnlVMFEyMVJ3QXRXT1BJemNPcVl3RmhYZ1dIeEJzTExCZzlUSzFuUXgzd3hYbThTZzQtemR6ZTNQWDU3T3YzckItcW5RbzhCd0JxMXVCTkNINkFiNHl3Z2d3Njh4VmdkREdiSi1OYnQwMmdvZ19kZkItcFhRLTh0ZmZiRzlIN1paZWR5eG9OTElQWE1wRjZWSl85QnpoZw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNVljVEZLYVdFeFNpMVhiRU5DVFJDcUJCaXFCQ2dLTWdhcEZaak5GUW8=-w400-h224-p-df-rw",
        "source": "E! Online",
        "datetime": "2025-08-15T21:01:00.000Z",
        "time": "6 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Breaking news: Upshur County Schools releases proposal to close two elementary schools, combine middle and high schools",
        "link": "https://news.google.com/read/CBMi4AFBVV95cUxPbmljRWRaWkJpbERYcUdDdGJqWlJLeXNPd21PZXNlWlVuUzVfN09vVUVKdUx5ekVRQ0ViTG5wUk8zMTF4VWpkbG9jWkFEaWJwY3c0NTB3RFVNdG5UX1ZjSjh4SlFSUXgyZ2wzbGVfTkRWaXFaaWhPSmllMlRCbmZDOGNwTmJqRGJyendCakRWNWVtcWNiT080aTFlSWdYQzhMNGU4ZWlTU1hvb2VwcEFVSU4tUzhFT0ZtaEJwSUVFTXNyTFhac0FIbnRRYVRoWEx4U0NHUS1XNW9MSWdKRDdNSQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNUtlVVp3TjNGVVVuRlBPVVE0VFJERUF4aW1CU2dLTWdZZGRKUnNxUVk=-w400-h224-p-df-rw",
        "source": "My Buckhannon",
        "datetime": "2025-08-12T23:09:31.000Z",
        "time": "3 days ago",
        "articleType": "regular"
    },
    {
        "title": "Man accused of breaking into elderly woman’s Lady Lake home, injuring her",
        "link": "https://news.google.com/read/CBMiwAFBVV95cUxOY1FxbmhQdWNROHY1NlJCbmdIbUd6SXBtSXVCQ3Q4V3AweFhTeW1YcGl5TUJERGxFRkJPWWItR25qZm9xMndUZ19UbkxCYkxUZnRDcUppcGZSY2stZHNVdk9QVzJMZ1hPdEU2TTg3Qk5Tb3B2NHZCcWtoSFdBNmJBWm9Zc1lKczk5S21SdkUwaXJpMk8wZlRTeTREZHM0RWh6WnJoOWxodHZWdzlNSFBfRVdQbUNDdkltUU4zTGlQb0s?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNWxaWGQ1VTFGc1pqVnNhV3h2VFJEb0FoaUFCU2dLTWdhdFpZak9yUVk=-w400-h224-p-df-rw",
        "source": "WKMG",
        "datetime": "2025-08-13T19:12:05.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "KMOX wins best ‘breaking news’ coverage in the country",
        "link": "https://news.google.com/read/CBMilgFBVV95cUxQWTluaWpzY081LUhKY2Z4SmhKdVlacXdhR2hBVEI2cHU3SlJUQnU5S3RYTFlfTExYbDN1SmhHbjBxVF85RnJGUmxnRV9LTjZ0amFmWWtBRkFUZWo5N1lpMkxONkVWejFYbUdKZnJlTkpvZDgwOXBPcUNoQ1VvbzUwR0NINzNwdmgxMTNpQ3VpYi11UnZjTlE?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNU5aM0U1VDFOUVZHbFJiMnMyVFJEZ0F4aUFCU2dLTWdtSklZQU16V0dwWlFJ=-w400-h224-p-df-rw",
        "source": "Audacy",
        "datetime": "2025-08-15T07:01:49.000Z",
        "time": "20 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Henkel launches hot melt adhesive for PET bottle labeling",
        "link": "https://news.google.com/read/CBMiqgFBVV95cUxQOVFfaXVKbE95bmZ5R184YklQenlnRE5vaVo3ZnFITmRFaXMyenY4T2ZCTl9hOHZEa2xBM0JsTHlrOFlYYTFtd1huLVh2Y3pjR1V6ZmtuVVpPc3c3T0FpZHZHQWF6ZEFwcWVpZGRJclJRY19JTV9HU1Q1cmZoakJURXZzdzlqREdJbWpjZksyZjVBMnE4cU5EdXFRNVNnNWRVQ3NNdHFUQ2tXQQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iI0NnNW5NVGQ1TkRscVFVRnZTM0ZmVFJDWEF4anhCU2dLTWdB=-w400-h224-p-df-rw",
        "source": "Label and Narrow Web",
        "datetime": "2025-08-15T15:39:02.000Z",
        "time": "11 hours ago",
        "articleType": "regular"
    },
    {
        "title": "🚨Breaking news: Barça issue statement on Ter Stegen",
        "link": "https://news.google.com/read/CBMiiAFBVV95cUxNb21aT1lWN09ycGYwZkdhMWJqUmZpWEtyR2h2UTFoUEt5M2RTSUpiUnI0eG5UeGxfWnB2Ui1DTE1QVnZUNnFrX1RrM2swV2dnanc5OURTaW5wSE9qUjJsT05EQXk5TUhpNkc3YXNqVVlwS0dnTmRDVFFsTEtUR21vdlBCckZuVUow?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNU1XbXMwU3pWM1NVWmtkV1JaVFJDckF4aUFCU2dLTWdtVlE0eEpJU21TRGdJ=-w400-h224-p-df-rw",
        "source": "Yahoo Sports",
        "datetime": "2025-08-13T19:38:00.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "New York state man jailed after breaking into cabin near Slate Run",
        "link": "https://news.google.com/read/CBMiqwFBVV95cUxQZVJVYlpqcEIzMUJHeVRlWTM1UTN2VklMcF9GS0VxdlVndlhUZFZqSl9BUXFhdDBFTE9ldWpBdjFUTzZ4Y1hZU0tISFNBQk5YbFJNTUd4ZFJWWlhuT1FQWEJXMFRzY0Rlem5GVWlZQ0tJVzdIQXpxQU44T1JsN0xyeHFPdGFmZXZsd0ZqYnpuc0YwVWNxSjVOWTdoSWhNMldVbHJnNmxuVDlsSWs?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNVNNbVIwU1VKWVQyWkhSa00yVFJEUkF4aVRCU2dLTWdrQllJUkxyV1Z6TlFF=-w400-h224-p-df-rw",
        "source": "sungazette.com",
        "datetime": "2025-08-14T06:05:13.000Z",
        "time": "Yesterday",
        "articleType": "regular"
    },
    {
        "title": "Wiles intervened to save RFK Jr.’s top vaccine aide",
        "link": "https://news.google.com/read/CBMilwFBVV95cUxQSjFJOWlFU1I1Z3E5aUFOQkIzanhuVjhENVdVcVI1aExRWlhYVlBtaXoxd1VUQ29RR2t3VEloWk1CQlVxcXdYcDhQOUFKd2cxUV9zclNOUW1kQUgyN1pxSTdRN0ttRG9vVTBpd2dnSmVVekoySWppd2FDdGxvRmNHX2xORm9hLTZMcldlMUswWjlPUDZBcXlV?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNUdXa3cxWW05YWFuaFBOblpqVFJDQkJCaldCQ2dLTWdhdGhJNlB0UVk=-w400-h224-p-df-rw",
        "source": "Politico",
        "datetime": "2025-08-14T09:05:00.000Z",
        "time": "Yesterday",
        "articleType": "regular"
    },
    {
        "title": "Trump-Putin summit in Alaska holds a 'historical significance,' experts say",
        "link": "https://news.google.com/read/CBMingFBVV95cUxOd01mRTVHTXU4aVptVklDdVNidC1ycm95bUpZOF9ydzBkd2xCOEhjX05oS1dlTERKZkxPNF84TzROaF9BaUFlZDBmOWxPTXVDMm1POUdNcEdFemZ4Qm9uNDZ2WTUxb0VXMjU4amRwVjZlS0FHQlFERGxhNnJQZFR4OHQ1TW9UODN6QWZIOVV1czY1X2ZyNVpncklwQ04tUdIBowFBVV95cUxNQ2ZPQWR6cVRhTHllR0tZSVl4QnNpbjBCSXhGQjVKWXhsSEhkNXM0WVJSb1Z5OTBPVXRYRF9Xckt3c09LREp6SDBZbU4tM3F6MkN3T2YwRE1UdW5wQUx6TnAxclhzamVmVGphdnB5eHV0Z21XX2ZiVzY5WHJLcEJQNjJiYUxCVUxJNW5wUXBhV2hPaFNZV1FBZ3ozNFFwdkJlZDhj?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNXJjMUpLVlhJeWNpMU5kV1k1VFJDZkF4ampCU2dLTWdrTmNvcW51bVU5alFF=-w400-h224-p-df-rw",
        "source": "ABC News",
        "datetime": "2025-08-14T22:52:30.000Z",
        "time": "Yesterday",
        "articleType": "regular"
    },
    {
        "title": "NBA schedule 2025-26: Breaking it down by the numbers, including most back-to-backs",
        "link": "https://news.google.com/read/CBMitwFBVV95cUxOVEQ4QV9mR0tnZ0pFM1oyNEFvLTc3Zk9Pb3RVNTh6OW1sZ2JEYzdyUkV5MUZyc1lqaU5RSXcwXzdKRmJNZ0VmNm1xNm44UXh0N0RxSEIyYWU5bDNEZUFhdVVCOGYtbmZ5X0o0emdTUTR4UXFlOE9Ga1lnazNGZnI0UVVndHZyN1VWYU1GaDZsSXgwcHRLbmtpQlcxZlRJaVAtcms5NXdzLW45T1F3empDQVBDbS1haUE?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNVFVSFJUVDNsd2FWQXpOVFl6VFJDZkF4ampCU2dLTWdZTklJeG9tUWc=-w400-h224-p-df-rw",
        "source": "NBC Sports",
        "datetime": "2025-08-15T17:11:05.000Z",
        "time": "10 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Country Music Icon Garth Brooks Announces Breaking News",
        "link": "https://news.google.com/read/CBMilgFBVV95cUxOczhkc0xIRXE2NE5sZ0hrTFg3aXZsRTNmaHE1UTktcEVEQ0J1SlZNTkl5VXBYTGtwQlkzamVFLWF2TXpKUElhM3dZY3oyWTk5VjNsdDJoVi0tN0drYTV4TDI4UFRKQnZyRkEwZWdQb25FY09UYUM0QUFPakExSGFkbnMyY2ZZZ3NkSzNSajNNS0tEYzRQbFE?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNHhUR0Z3YzJ4SVRtZEZaWFJxVFJDZkF4amlCU2dLTWdZaEZZWktqZ3M=-w400-h224-p-df-rw",
        "source": "yahoo.com",
        "datetime": "2025-08-11T15:33:43.000Z",
        "time": "4 days ago",
        "articleType": "regular"
    },
    {
        "title": "US applications for jobless benefits fell last week and remain in historically healthy range",
        "link": "https://news.google.com/read/CBMirAFBVV95cUxPZFpBd0NQYWFmMHkwMUdGdjZ4SVFib2V5VWJvZFZzTFhWMk5pQjFDWnR4c3JjNlA3blNwOXMtRS1ycjNzSGFRaEJ2Yl9SN0FQcUhEUG9lamg4Q1RRS0RrOV9CMkxCOFR3QmRnREtfMWtVOU1Xd2dLc1hXYURQT2VVNEVGMU5zS2NPSmlvQzMzamVTNnhRRjY3ekJMZW1Ja1B5am9TZHF3Rk1MVXVk0gGyAUFVX3lxTE5zclJXRmVEVHdqd1o3VGVEaElaN0ZJN3NJMVM1cnRsMVdOeEFGdW5pcWI0dEJlcnV5OTcxU2hvcEllQ3kzNzBLaHFfaE9NZDNEZzl3SHY3dVE3RF9Iel8xYUR6SWdDMXBHMkVpWHNoZ3lJTGdRTlM1UUFiRzNNbFVOUkthaEU1QURuUHQ0NTRoXzBjYkRXZ0VqRFVrNUVzZFNNc3RrNkcwX3MyVGIxUG9RNnc?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXdVbUZSVDA1VU9EZHRhMDkxVFJDZkF4ampCU2dLTWdZRk1wN3dtQWs=-w400-h224-p-df-rw",
        "source": "ABC News",
        "datetime": "2025-08-14T13:15:36.000Z",
        "time": "Yesterday",
        "articleType": "regular"
    },
    {
        "title": "Live updates: Today's South Florida News",
        "link": "https://news.google.com/read/CBMiowFBVV95cUxPRlU4cFJjeGJKVU96NkxndWE1akdFcmF3U2VRbk94cU9xY2pEaUFMLVM3MDFtUVgtOU4wbW9faEF6TGFuR1hvMVZxZkd2WmtJbHdHLTRPaXZZT1dmVmZLdVZ3cmRESlRPN2lITFNIcHZvTjZYQllwYzZWdFdqN3ZPTlpqZ1lRM0VaUnBXajJ1bnhHdzhwWU5LcDhuZjdlei02YUpF0gGrAUFVX3lxTE5iZHdZa09nSWk4SDhYRUdUNGF6WW9mak4tbDg2dXMxdkR5T3N5dHVIb1o3MDhQUkJiTlc0Z0dOLUktblJ5bTY5QVdwVExRWmV2SThVSGoyckM5ekk4UFc4cHo5VzlTazdqV3dMSG51Slp2cVdJRnVfc1FWbkg1STlvUkdpZC1DSHk1MGRnM084VGo3TEZDeERlOS1TbFdXOTFIWEd4MTdaenRpVQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNU5UbTFFVlhsWlpFOWxhWFJtVFJDZkF4ampCU2dLTWdhQkU0am1rZ3M=-w400-h224-p-df-rw",
        "source": "NBC 6 South Florida",
        "datetime": "2025-08-15T02:59:44.000Z",
        "time": "Yesterday",
        "articleType": "regular"
    },
    {
        "title": "Jay Collins selected as Florida's lieutenant governor",
        "link": "https://news.google.com/read/CBMiqwFBVV95cUxQaDlaa2FvN3k2enlkVGVaclVSamxhamNSVkk2RkNCdXNEVFRtcTVPS2tmTnlsOU9aZVdVOWJGaFlvSzFVcnNqS0RmbzdRQS0zTWROSjdJYzBETW1UMjB4SWE1NVBlNS11Y0d2ZDN2WEc0aG9PV0QtOGpzNFA4STZvRFdGTnpyWndZc1p3UnNmbDFQcmZfTGFRY0dzX1hvZ2VFeDNmN3h2S2NEa0k?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNUhZbEp5UzBSTGJscE1SV3hwVFJDZkF4ampCU2dLTWdZdEZwak5GUW8=-w400-h224-p-df-rw",
        "source": "Spectrum News 13",
        "datetime": "2025-08-12T13:26:00.000Z",
        "time": "3 days ago",
        "articleType": "regular"
    },
    {
        "title": "Breaking News: Midland ISD trustees vote to rename Legacy as Lee",
        "link": "https://news.google.com/read/CBMigwFBVV95cUxPNXlYc1BqOWhOdWdWdC1nYWpNSkZlV2lSUXJDV01QNlB4NVI2V2h2NkFjb3ZnSmhUZjhMOUNXNmk0b2oyS0NCbzg2ejZMcnJtVDE4UkxOTHZwQWV2UjdKX0JlZE5CMHB4NnFqWDFpeldUU2tiU3M3THpwZUpLUnZxN0s3dw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNDBPR1owWTIxUk4zRjNia0ZvVFJERUF4aW1CU2dLTWdZQkFKem5oUXM=-w400-h224-p-df-rw",
        "source": "Midland Reporter-Telegram",
        "datetime": "2025-08-13T04:10:51.000Z",
        "time": "3 days ago",
        "articleType": "regular"
    },
    {
        "title": "Opinion | Here’s the Big Deal Trump and Putin Could Actually Reach in Alaska",
        "link": "https://news.google.com/read/CBMiwgFBVV95cUxQMVZRS0lBQVFUMGxFRzlTbTVUeUhmbW9HZFUyWV9sYzJ0NzY3cWFVVEc2WTVDQTNWUkNxNnUxV2ctaC10WDZuaVJNTzRHdC1YRy04ajhaLVNuYWFtbFZQc3BQSXNfM2dOU2Y2dThDVzI4ZDVDRHhuaFdUdWhmMkx5U1pWY1NBYms1cENVOWRFTVJoZ1JnQlBiX3BDV3JuOW5pSHlnR05jWm1XWGF3VGtSZDJZMkNJVXlaYTRORWdHRWVrdw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNUhXSFUzVTNWV2RtSnJaMjlHVFJDa0F4ajJCQ2dLTWdheEFwNHhrUXM=-w400-h224-p-df-rw",
        "source": "Politico",
        "datetime": "2025-08-14T16:01:00.000Z",
        "time": "Yesterday",
        "articleType": "regular"
    },
    {
        "title": "Leaked chart reveals winners and losers in California’s Democratic gerrymander",
        "link": "https://news.google.com/read/CBMixgFBVV95cUxNTV9CNjFmUUh3S1JBRG1DNmwzRVpNejFjNHpRSU9Pc2E0VFRLYndPd09KM3QtWlhyMDNUZkxGc1V0WXNoZ3FBaXI4UUJnMldtakR0MVNfNHhQcFB4ZENLeWI4OWR5SW9jZUJ3N09WVnRzUVd5VVNRYlBEYU9iZXpubGloU2UybzlwSkFwY3BKVWw4U0tGdHBuWGZqb2xxbFQ4eFFaV1hMdk1UWkxVaWpyazlaT0E1MGJrejQ5aXhKQlMyMXVHQnc?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iMkNnNWZkak5MZVdzNGVWaHliMnQyVFJDa0F4ajJCQ2dLTWdzQkVJUW9IYWhFTVRta3lR=-w400-h224-p-df-rw",
        "source": "Politico",
        "datetime": "2025-08-14T22:30:00.000Z",
        "time": "Yesterday",
        "articleType": "regular"
    },
    {
        "title": "Police shoot and kill man after 'prolonged interaction' in Keene, attorney general's office says",
        "link": "https://news.google.com/read/CBMiigFBVV95cUxPcGtfOUlvbGhaT3gydFF6TnlXWlFmUllHVHJMWGV4TlNoVldoU2I1bFR2WWEwV0k4SVdST3hLZnhUNkRtT1UyTGpCWUxXTEQyVFBEZkdldlZfTVljNkUzekZJT2pjcTRZS29rRHU4Ni15enVQQVpkb201UnlBZWVNRWdqeTJ2S1pjVnc?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNUllR3MwWldvd1IxbzRjRGh5VFJDb0FSaXJBaWdCTWdZWnM0RE92UVU=-w400-h224-p-df-rw",
        "source": "WMUR",
        "datetime": "2025-08-13T11:55:00.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "Top private prison companies see profits amid administration's immigration crackdown",
        "link": "https://news.google.com/read/CBMitAFBVV95cUxQYURzaG45WnJVLV9YYTdlU1NUQWJ1T1NVVEFzN0NJQXhQSGE5azlSd0F1N1ZnVURpZzNmLXo5cGx5QkJxVTRsREFSc0EtUHVYV3RCMVByWlFTNGpEUXJreVpvUzNmSHllSTdvYzhqZUdYRWlMZkFaLW0zc0hFVWNVS0hQUVBDR3lNbUQzNW9BckpRLXRNS3RPMU1MU1QzY0NMeFJFMHlibkxqZzJKSWRnclAxQlDSAboBQVVfeXFMUHVpcnQtWk83cnN3bnZESVNncDcyamtBNWV4VmtCUGJZLXZSQjEtWDY1TXNTeUR0NDJ5ZV9DM3U1Zk9Dc0RGMzd4NXBXTXJ0MHRnMXdGR0VfTm9qY0laaFVKMGdSdFRtR240NTA4YW5JcWVCd3JlOFQ0a3AyMmdBNEo5QlpzTy1qbGpTME5RdlV0T05FV2FCOGZkMlFFV0hhc3o2ODUtTzFTMHkwS0o5bGtMMl85VGhTSTF3?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNTZTMlZaZVRoMVdrZDZOa1o1VFJDZkF4ampCU2dLTWdrQmxJUnZzV2Fpa1FF=-w400-h224-p-df-rw",
        "source": "ABC News",
        "datetime": "2025-08-12T22:14:41.000Z",
        "time": "3 days ago",
        "articleType": "regular"
    },
    {
        "title": "FWC approves removal of 187 bears in Florida's first bear hunt since 2015",
        "link": "https://news.google.com/read/CBMingFBVV95cUxQTVNER3hsNWtWcDBVX3NIOHplOUZkc01STmZySDR2SWVqZmJSVTJVdlk2SDdVSGo0ZWdYRUo5YmtFUnBtV0pseEw2eWJaNi1peVloNTlkUmdNc0tRVTZHMFpac0xickZrUlJHdkgwbWF6QzRIV2dhbThOeXNVSW5OX2txNkFSMXZCT3laYWR2SkpfZ0pQdFY1c0FMdHBCQQ?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNU1lRFZNVURaWWFuWk1hRGhsVFJDZkF4ampCU2dLTWdZSlZackVJZ2s=-w400-h224-p-df-rw",
        "source": "Bay News 9",
        "datetime": "2025-08-12T22:05:00.000Z",
        "time": "3 days ago",
        "articleType": "regular"
    },
    {
        "title": "Man fired 180 shots, breaking 150 windows, in CDC attack",
        "link": "https://news.google.com/read/CBMisAFBVV95cUxQdWZ0Y0R4ajNuQ3lvUTR1S2VodjdUMWYwQ0dZVHh3XzJDWWlFcjdpUzNqUEJENTlubVJWOXRINTEyQjM4QnpQWmtUcWJJUjN1RGt4MkhKYk1ZT3gyNDBuNzcxbjZoSXZHNHVpMndCbXViNzRiazhHTXJhZi1uckJmMVc3OFA0RmlJQ1NDcS1GZXRxdHExdldaX1FreVNjXzlmVTgzVnBwSXhsTFdfRnFGYg?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iL0NnNTNOUzFvZVZaalUzZHBhakppVFJERUF4aW1CU2dLTWdtRkpJNm1vZWJRaFFJ=-w400-h224-p-df-rw",
        "source": "News and Sentinel",
        "datetime": "2025-08-12T04:01:20.000Z",
        "time": "4 days ago",
        "articleType": "regular"
    },
    {
        "title": "Ukraine News Today: Breaking Updates & Live Coverage - August 15",
        "link": "https://news.google.com/read/CBMiTkFVX3lxTFA5RlQ5LXdaQUtpcWZhMExtdG44MUpJN3A5SXpuQlBjekxncmE4QWFQVXhKckQ2eDdFTy1hUlltd2xxQ3ozNERWQnpISXZmZw?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNTNablJsVUdwMVlrNUVhVkphVFJDZkF4ampCU2dLTWdhTmdaTG9NQWM=-w400-h224-p-df-rw",
        "source": "Kyiv Post",
        "datetime": "2025-08-15T10:01:25.000Z",
        "time": "17 hours ago",
        "articleType": "regular"
    },
    {
        "title": "Video. Latest news bulletin | August 13th, 2025 – Evening",
        "link": "https://news.google.com/read/CBMikAFBVV95cUxOSEdIeDVCb0Z3MlpHRjJ3TUVtQlI1ckkzV2RUR3BmWl9QUkZiTXcyT2g2V2M5M2w3OGcxZk1FNm1odkZ6WmRwVm15OUJOS19fOTdrMi1xdHRCQlBZZ1FLdEp1LXVSWUZXTnpxZGd3VjlvSnJKaEgyTjU0eks0cGhRdGNQclAzczd3dzc3UWNmZWE?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNWlWWEpWVUVzMVZXeHRNa0ZVVFJDZkF4ampCU2dLTWdZSllvNkZ6Z1E=-w400-h224-p-df-rw",
        "source": "Euronews.com",
        "datetime": "2025-08-13T16:00:29.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "BREAKING NEWS: George Harris has died",
        "link": "https://news.google.com/read/CBMiW0FVX3lxTE9ZdmpzRkxuSGszQ2QwVGIwVGZzbGhkVV9VVlpjbktPQXBQRlNTTmk1aFdKc09ycUlJWjEwbEhINUgxb0xjRTdreGUtYTRldDYzcUZOYk0xZExHUnc?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXdaa2hCT1V0dVUwNWZhalpNVFJERUF4aW1CU2dLTWdheGRKU1ByUWM=-w400-h224-p-df-rw",
        "source": "Dallas Voice",
        "datetime": "2025-08-13T20:15:18.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "Pete Alonso breaks Mets home run record, Ohtani in hot water again & MLB's top prospects",
        "link": "https://news.google.com/read/CBMi0wFBVV95cUxOVERsRmtYamhMUFhzRU94bFpPWG0tbWgtVHZ6OUJLMTNYa2JlTHNTdmxENF9xeFFfQlUtLTlXY2NNLXczTllmaXRFTWFjaVZaR0phY3ZLR1JnU3JGeGp4aW1oS0JzZV8tZzZlX2pPWHF5V0llQkJuV1lWVkI4V1pSRHFwa1I3anBRbVpvMFByaC1NYW1Eb1BEVlZpVXJjRmh4V0RKa2dMR0FEMXBUTDhiN1Y0ZnpLWFRhZlR5b0hOSkFIWGxEXzJfMHhtZFFMMGxxN1lz?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "https://news.google.com/api/attachments/CC8iK0NnNXRjelpGZWtoMWNqUkRiVVZuVFJEb0FoaUFCU2dLTWdZaFpJcHdwUWM=-w400-h224-p-df-rw",
        "source": "Yahoo Sports",
        "datetime": "2025-08-13T18:40:31.000Z",
        "time": "2 days ago",
        "articleType": "regular"
    },
    {
        "title": "Trump tariffs live updates: China urges firms to shun Nvidia chips, trade truce extended",
        "link": "https://news.google.com/read/CBMi3gFBVV95cUxPcS1KM01QSWdOdGxIZGFkM001bXE1eFMwZjdhUjdYSWo4Z09rXzU4STk0QjR6bm1rQnJjbWdSdlJUWUREeE9LVEFmRkowbEVIcmh4ZHFoRXdFQ2Y3dkNoa1F2Z2QxS2ZXWHA3dVVjOHRIN1dFLVhmRm9yUC1aYTRSQ1FjampqR1JaM3ZyRDRGemd5WEFtd05iQ2QwZEVNWlhseXhQUXNaMEpPdW1XM2VUdjVOR2JXNk5jYkRRR19mQ1JaSjhuODNtVzIxX3BRU1F3UUQtNk5admZpYXNFMXc?hl=en-US&gl=US&ceid=US%3Aen",
        "image": "",
        "source": "Yahoo Finance",
        "datetime": "2025-08-12T19:24:16.000Z",
        "time": "3 days ago",
        "articleType": "regular"
    }
]

export const getHardCodedNewsData = (): { success: boolean; data: Article[]; error: string | null } => {
    return {
        success: true,
        data: hardCodedData,
        error: null
    };
}