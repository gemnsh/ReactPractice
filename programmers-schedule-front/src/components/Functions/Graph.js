import React from "react";
import './Graph.css';
import Card from "../UI/Card";
import CalendarG from "./CalendarG";

const Graph =() =>{
    const d=[
        {
          "value": 286,
          "day": "2023-05-22"
        },
        {
          "value": 132,
          "day": "2023-07-12"
        },
        {
          "value": 263,
          "day": "2023-10-29"
        },
        {
          "value": 37,
          "day": "2023-08-31"
        },
        {
          "value": 391,
          "day": "2023-10-26"
        },
        {
          "value": 394,
          "day": "2023-12-11"
        },
        {
          "value": 218,
          "day": "2023-10-31"
        },
        {
          "value": 214,
          "day": "2023-09-22"
        },
        {
          "value": 262,
          "day": "2023-01-08"
        },
        {
          "value": 199,
          "day": "2018-07-13"
        },
        {
          "value": 139,
          "day": "2023-07-28"
        },
        {
          "value": 105,
          "day": "2023-04-03"
        },
        {
          "value": 331,
          "day": "2018-05-14"
        },
        {
          "value": 90,
          "day": "2023-05-12"
        },
        {
          "value": 12,
          "day": "2023-11-21"
        },
        {
          "value": 204,
          "day": "2023-08-13"
        },
        {
          "value": 341,
          "day": "2023-10-16"
        },
        {
          "value": 176,
          "day": "2018-07-27"
        },
        {
          "value": 153,
          "day": "2023-04-06"
        },
        {
          "value": 197,
          "day": "2023-05-22"
        },
        {
          "value": 257,
          "day": "2018-02-28"
        },
        {
          "value": 78,
          "day": "2023-12-28"
        },
        {
          "value": 102,
          "day": "2018-04-21"
        },
        {
          "value": 173,
          "day": "2023-12-27"
        },
        {
          "value": 373,
          "day": "2023-06-05"
        },
        {
          "value": 314,
          "day": "2023-07-25"
        },
        {
          "value": 133,
          "day": "2018-04-28"
        },
        {
          "value": 18,
          "day": "2023-02-27"
        },
        {
          "value": 108,
          "day": "2023-04-07"
        },
        {
          "value": 140,
          "day": "2023-06-16"
        },
        {
          "value": 306,
          "day": "2023-11-12"
        },
        {
          "value": 303,
          "day": "2023-06-06"
        },
        {
          "value": 74,
          "day": "2023-04-08"
        },
        {
          "value": 337,
          "day": "2023-04-21"
        },
        {
          "value": 172,
          "day": "2023-12-21"
        },
        {
          "value": 103,
          "day": "2023-05-03"
        },
        {
          "value": 66,
          "day": "2023-02-03"
        },
        {
          "value": 115,
          "day": "2023-10-22"
        },
        {
          "value": 13,
          "day": "2023-11-06"
        },
        {
          "value": 110,
          "day": "2023-11-09"
        },
        {
          "value": 284,
          "day": "2023-02-06"
        },
        {
          "value": 365,
          "day": "2018-05-27"
        },
        {
          "value": 293,
          "day": "2023-03-24"
        },
        {
          "value": 163,
          "day": "2023-06-24"
        },
        {
          "value": 209,
          "day": "2023-07-28"
        },
        {
          "value": 7,
          "day": "2023-12-26"
        },
        {
          "value": 70,
          "day": "2023-12-04"
        },
        {
          "value": 6,
          "day": "2023-12-14"
        },
        {
          "value": 281,
          "day": "2023-09-05"
        },
        {
          "value": 238,
          "day": "2023-07-26"
        },
        {
          "value": 222,
          "day": "2023-02-08"
        },
        {
          "value": 374,
          "day": "2023-10-22"
        },
        {
          "value": 218,
          "day": "2023-10-08"
        },
        {
          "value": 361,
          "day": "2018-03-05"
        },
        {
          "value": 160,
          "day": "2023-10-16"
        },
        {
          "value": 262,
          "day": "2023-04-29"
        },
        {
          "value": 377,
          "day": "2023-04-09"
        },
        {
          "value": 15,
          "day": "2023-05-10"
        },
        {
          "value": 392,
          "day": "2023-02-16"
        },
        {
          "value": 345,
          "day": "2023-11-03"
        },
        {
          "value": 192,
          "day": "2023-03-30"
        },
        {
          "value": 169,
          "day": "2023-03-11"
        },
        {
          "value": 308,
          "day": "2023-03-25"
        },
        {
          "value": 103,
          "day": "2023-09-26"
        },
        {
          "value": 266,
          "day": "2023-12-13"
        },
        {
          "value": 59,
          "day": "2018-01-07"
        },
        {
          "value": 55,
          "day": "2023-08-10"
        },
        {
          "value": 298,
          "day": "2023-02-20"
        },
        {
          "value": 313,
          "day": "2023-11-26"
        },
        {
          "value": 144,
          "day": "2023-07-10"
        },
        {
          "value": 339,
          "day": "2023-12-18"
        },
        {
          "value": 269,
          "day": "2023-11-17"
        },
        {
          "value": 47,
          "day": "2018-04-26"
        },
        {
          "value": 3,
          "day": "2023-05-31"
        },
        {
          "value": 293,
          "day": "2023-09-24"
        },
        {
          "value": 339,
          "day": "2023-12-25"
        },
        {
          "value": 307,
          "day": "2023-08-31"
        },
        {
          "value": 81,
          "day": "2018-02-13"
        },
        {
          "value": 44,
          "day": "2018-08-01"
        },
        {
          "value": 182,
          "day": "2023-10-10"
        },
        {
          "value": 215,
          "day": "2023-07-07"
        },
        {
          "value": 346,
          "day": "2018-03-20"
        },
        {
          "value": 379,
          "day": "2023-01-15"
        },
        {
          "value": 340,
          "day": "2023-03-08"
        },
        {
          "value": 256,
          "day": "2023-10-14"
        },
        {
          "value": 244,
          "day": "2023-07-15"
        },
        {
          "value": 35,
          "day": "2023-07-15"
        },
        {
          "value": 185,
          "day": "2023-12-30"
        },
        {
          "value": 252,
          "day": "2023-08-31"
        },
        {
          "value": 60,
          "day": "2023-01-01"
        },
        {
          "value": 30,
          "day": "2018-07-10"
        },
        {
          "value": 265,
          "day": "2023-02-03"
        },
        {
          "value": 157,
          "day": "2018-06-24"
        },
        {
          "value": 83,
          "day": "2023-05-25"
        },
        {
          "value": 158,
          "day": "2023-02-18"
        },
        {
          "value": 62,
          "day": "2023-02-13"
        },
        {
          "value": 48,
          "day": "2023-04-04"
        },
        {
          "value": 11,
          "day": "2023-04-05"
        },
        {
          "value": 259,
          "day": "2023-06-11"
        },
        {
          "value": 332,
          "day": "2023-07-14"
        },
        {
          "value": 288,
          "day": "2023-05-31"
        },
        {
          "value": 145,
          "day": "2023-05-17"
        },
        {
          "value": 332,
          "day": "2023-06-27"
        },
        {
          "value": 26,
          "day": "2023-05-18"
        },
        {
          "value": 26,
          "day": "2023-09-13"
        },
        {
          "value": 338,
          "day": "2023-07-19"
        },
        {
          "value": 294,
          "day": "2023-07-12"
        },
        {
          "value": 70,
          "day": "2018-04-08"
        },
        {
          "value": 331,
          "day": "2023-10-28"
        },
        {
          "value": 383,
          "day": "2023-07-04"
        },
        {
          "value": 304,
          "day": "2018-03-11"
        },
        {
          "value": 366,
          "day": "2023-01-18"
        },
        {
          "value": 294,
          "day": "2018-05-30"
        },
        {
          "value": 216,
          "day": "2018-04-12"
        },
        {
          "value": 358,
          "day": "2023-03-25"
        },
        {
          "value": 217,
          "day": "2023-06-27"
        },
        {
          "value": 358,
          "day": "2023-10-31"
        },
        {
          "value": 378,
          "day": "2023-05-12"
        },
        {
          "value": 34,
          "day": "2023-09-06"
        },
        {
          "value": 263,
          "day": "2023-05-17"
        },
        {
          "value": 73,
          "day": "2023-07-19"
        },
        {
          "value": 289,
          "day": "2023-12-12"
        },
        {
          "value": 5,
          "day": "2023-11-29"
        },
        {
          "value": 289,
          "day": "2023-06-09"
        },
        {
          "value": 229,
          "day": "2023-02-04"
        },
        {
          "value": 201,
          "day": "2023-01-04"
        },
        {
          "value": 110,
          "day": "2023-09-19"
        },
        {
          "value": 233,
          "day": "2023-07-29"
        },
        {
          "value": 244,
          "day": "2018-06-29"
        },
        {
          "value": 282,
          "day": "2023-01-30"
        },
        {
          "value": 309,
          "day": "2023-11-02"
        },
        {
          "value": 40,
          "day": "2018-05-06"
        },
        {
          "value": 44,
          "day": "2018-06-27"
        },
        {
          "value": 210,
          "day": "2023-08-29"
        },
        {
          "value": 319,
          "day": "2023-05-01"
        },
        {
          "value": 338,
          "day": "2018-03-19"
        },
        {
          "value": 194,
          "day": "2018-03-31"
        },
        {
          "value": 211,
          "day": "2023-01-20"
        },
        {
          "value": 167,
          "day": "2023-07-06"
        },
        {
          "value": 205,
          "day": "2018-07-04"
        },
        {
          "value": 9,
          "day": "2023-03-28"
        },
        {
          "value": 43,
          "day": "2018-06-01"
        },
        {
          "value": 211,
          "day": "2023-05-30"
        },
        {
          "value": 164,
          "day": "2023-05-28"
        },
        {
          "value": 262,
          "day": "2023-08-04"
        },
        {
          "value": 383,
          "day": "2023-07-04"
        },
        {
          "value": 306,
          "day": "2023-06-10"
        },
        {
          "value": 30,
          "day": "2023-12-29"
        },
        {
          "value": 77,
          "day": "2023-08-18"
        },
        {
          "value": 238,
          "day": "2018-04-11"
        },
        {
          "value": 381,
          "day": "2023-12-02"
        },
        {
          "value": 230,
          "day": "2023-07-19"
        },
        {
          "value": 300,
          "day": "2018-03-01"
        },
        {
          "value": 322,
          "day": "2018-02-19"
        },
        {
          "value": 255,
          "day": "2023-08-04"
        },
        {
          "value": 384,
          "day": "2023-07-24"
        },
        {
          "value": 360,
          "day": "2023-03-17"
        },
        {
          "value": 320,
          "day": "2023-05-26"
        },
        {
          "value": 296,
          "day": "2023-11-14"
        },
        {
          "value": 244,
          "day": "2023-05-09"
        },
        {
          "value": 254,
          "day": "2023-10-08"
        },
        {
          "value": 174,
          "day": "2018-07-05"
        },
        {
          "value": 321,
          "day": "2023-02-24"
        },
        {
          "value": 81,
          "day": "2018-07-06"
        },
        {
          "value": 185,
          "day": "2023-01-15"
        },
        {
          "value": 190,
          "day": "2023-10-01"
        },
        {
          "value": 281,
          "day": "2023-10-21"
        },
        {
          "value": 217,
          "day": "2023-09-11"
        },
        {
          "value": 169,
          "day": "2023-01-06"
        },
        {
          "value": 254,
          "day": "2023-06-16"
        },
        {
          "value": 64,
          "day": "2018-05-07"
        },
        {
          "value": 227,
          "day": "2023-02-22"
        },
        {
          "value": 169,
          "day": "2023-11-09"
        },
        {
          "value": 71,
          "day": "2018-03-25"
        },
        {
          "value": 213,
          "day": "2023-06-07"
        },
        {
          "value": 105,
          "day": "2023-10-21"
        },
        {
          "value": 126,
          "day": "2023-10-15"
        },
        {
          "value": 35,
          "day": "2018-01-05"
        },
        {
          "value": 269,
          "day": "2023-09-02"
        },
        {
          "value": 179,
          "day": "2023-04-10"
        },
        {
          "value": 136,
          "day": "2023-03-22"
        },
        {
          "value": 244,
          "day": "2023-03-31"
        },
        {
          "value": 227,
          "day": "2023-07-30"
        },
        {
          "value": 170,
          "day": "2023-07-27"
        },
        {
          "value": 22,
          "day": "2023-05-05"
        },
        {
          "value": 11,
          "day": "2018-02-10"
        },
        {
          "value": 376,
          "day": "2023-09-02"
        },
        {
          "value": 366,
          "day": "2023-09-10"
        },
        {
          "value": 88,
          "day": "2018-02-09"
        },
        {
          "value": 270,
          "day": "2023-11-20"
        },
        {
          "value": 182,
          "day": "2023-11-10"
        },
        {
          "value": 184,
          "day": "2023-02-26"
        },
        {
          "value": 392,
          "day": "2018-07-17"
        },
        {
          "value": 77,
          "day": "2018-05-31"
        },
        {
          "value": 87,
          "day": "2023-02-07"
        },
        {
          "value": 256,
          "day": "2023-12-24"
        },
        {
          "value": 346,
          "day": "2023-04-04"
        },
        {
          "value": 131,
          "day": "2023-07-01"
        },
        {
          "value": 32,
          "day": "2023-06-10"
        },
        {
          "value": 9,
          "day": "2018-06-22"
        },
        {
          "value": 221,
          "day": "2023-06-09"
        },
        {
          "value": 321,
          "day": "2023-12-03"
        },
        {
          "value": 73,
          "day": "2023-03-21"
        },
        {
          "value": 136,
          "day": "2023-04-14"
        },
        {
          "value": 192,
          "day": "2023-05-21"
        },
        {
          "value": 14,
          "day": "2018-02-07"
        },
        {
          "value": 61,
          "day": "2023-07-08"
        },
        {
          "value": 7,
          "day": "2023-10-25"
        },
        {
          "value": 250,
          "day": "2023-03-13"
        },
        {
          "value": 116,
          "day": "2018-05-11"
        },
        {
          "value": 227,
          "day": "2023-09-15"
        },
        {
          "value": 318,
          "day": "2023-05-28"
        },
        {
          "value": 138,
          "day": "2023-05-21"
        },
        {
          "value": 177,
          "day": "2018-04-14"
        },
        {
          "value": 366,
          "day": "2023-06-06"
        },
        {
          "value": 43,
          "day": "2018-04-06"
        },
        {
          "value": 353,
          "day": "2018-06-23"
        },
        {
          "value": 391,
          "day": "2023-03-31"
        },
        {
          "value": 257,
          "day": "2023-04-20"
        },
        {
          "value": 51,
          "day": "2023-04-19"
        },
        {
          "value": 214,
          "day": "2018-03-09"
        },
        {
          "value": 368,
          "day": "2023-06-13"
        },
        {
          "value": 24,
          "day": "2023-08-22"
        },
        {
          "value": 297,
          "day": "2023-08-14"
        },
        {
          "value": 319,
          "day": "2018-03-12"
        },
        {
          "value": 299,
          "day": "2023-08-15"
        },
        {
          "value": 299,
          "day": "2023-11-01"
        },
        {
          "value": 395,
          "day": "2018-01-25"
        },
        {
          "value": 247,
          "day": "2018-07-07"
        },
        {
          "value": 371,
          "day": "2023-04-28"
        },
        {
          "value": 41,
          "day": "2018-07-03"
        },
        {
          "value": 240,
          "day": "2023-06-24"
        },
        {
          "value": 368,
          "day": "2023-10-12"
        },
        {
          "value": 176,
          "day": "2023-06-15"
        },
        {
          "value": 70,
          "day": "2018-02-23"
        },
        {
          "value": 108,
          "day": "2018-06-11"
        },
        {
          "value": 79,
          "day": "2023-09-09"
        },
        {
          "value": 303,
          "day": "2023-10-24"
        },
        {
          "value": 341,
          "day": "2023-09-22"
        },
        {
          "value": 24,
          "day": "2023-12-19"
        },
        {
          "value": 247,
          "day": "2018-06-17"
        },
        {
          "value": 172,
          "day": "2023-07-27"
        },
        {
          "value": 120,
          "day": "2023-12-07"
        },
        {
          "value": 262,
          "day": "2023-10-19"
        },
        {
          "value": 77,
          "day": "2023-12-04"
        },
        {
          "value": 239,
          "day": "2023-11-17"
        },
        {
          "value": 390,
          "day": "2023-07-05"
        },
        {
          "value": 149,
          "day": "2023-12-25"
        },
        {
          "value": 309,
          "day": "2023-11-05"
        },
        {
          "value": 124,
          "day": "2023-12-24"
        },
        {
          "value": 182,
          "day": "2018-02-26"
        },
        {
          "value": 52,
          "day": "2023-09-27"
        },
        {
          "value": 89,
          "day": "2023-10-18"
        },
        {
          "value": 15,
          "day": "2023-08-26"
        },
        {
          "value": 343,
          "day": "2023-12-26"
        },
        {
          "value": 194,
          "day": "2018-05-15"
        },
        {
          "value": 380,
          "day": "2018-07-01"
        },
        {
          "value": 370,
          "day": "2023-01-21"
        },
        {
          "value": 189,
          "day": "2023-05-29"
        },
        {
          "value": 168,
          "day": "2023-11-01"
        },
        {
          "value": 300,
          "day": "2023-02-13"
        },
        {
          "value": 112,
          "day": "2023-12-13"
        },
        {
          "value": 108,
          "day": "2023-11-04"
        },
        {
          "value": 131,
          "day": "2023-03-29"
        },
        {
          "value": 385,
          "day": "2023-10-19"
        },
        {
          "value": 263,
          "day": "2023-08-27"
        },
        {
          "value": 56,
          "day": "2023-05-24"
        },
        {
          "value": 214,
          "day": "2023-05-30"
        },
        {
          "value": 185,
          "day": "2018-02-14"
        },
        {
          "value": 353,
          "day": "2023-08-26"
        },
        {
          "value": 170,
          "day": "2023-12-16"
        },
        {
          "value": 83,
          "day": "2023-09-26"
        },
        {
          "value": 135,
          "day": "2023-11-21"
        },
        {
          "value": 122,
          "day": "2023-04-09"
        },
        {
          "value": 336,
          "day": "2023-12-18"
        },
        {
          "value": 155,
          "day": "2023-08-27"
        },
        {
          "value": 139,
          "day": "2023-06-22"
        },
        {
          "value": 131,
          "day": "2023-07-08"
        },
        {
          "value": 196,
          "day": "2023-12-08"
        },
        {
          "value": 200,
          "day": "2023-04-11"
        },
        {
          "value": 164,
          "day": "2023-10-11"
        },
        {
          "value": 74,
          "day": "2023-11-24"
        },
        {
          "value": 366,
          "day": "2018-05-19"
        },
        {
          "value": 340,
          "day": "2023-07-11"
        },
        {
          "value": 268,
          "day": "2023-03-18"
        },
        {
          "value": 359,
          "day": "2023-09-08"
        },
        {
          "value": 349,
          "day": "2023-04-30"
        },
        {
          "value": 312,
          "day": "2018-07-30"
        },
        {
          "value": 6,
          "day": "2018-01-02"
        },
        {
          "value": 306,
          "day": "2018-07-09"
        },
        {
          "value": 245,
          "day": "2023-08-08"
        },
        {
          "value": 231,
          "day": "2023-07-01"
        },
        {
          "value": 37,
          "day": "2018-03-23"
        },
        {
          "value": 16,
          "day": "2023-09-20"
        },
        {
          "value": 331,
          "day": "2023-03-10"
        },
        {
          "value": 214,
          "day": "2018-05-29"
        },
        {
          "value": 189,
          "day": "2023-05-13"
        },
        {
          "value": 374,
          "day": "2018-04-10"
        },
        {
          "value": 216,
          "day": "2023-07-03"
        },
        {
          "value": 95,
          "day": "2023-04-02"
        },
        {
          "value": 3,
          "day": "2023-04-15"
        },
        {
          "value": 374,
          "day": "2023-11-15"
        },
        {
          "value": 259,
          "day": "2023-09-30"
        },
        {
          "value": 372,
          "day": "2023-06-21"
        },
        {
          "value": 284,
          "day": "2023-03-30"
        },
        {
          "value": 174,
          "day": "2023-05-02"
        },
        {
          "value": 175,
          "day": "2023-08-17"
        },
        {
          "value": 254,
          "day": "2023-11-11"
        },
        {
          "value": 345,
          "day": "2023-01-06"
        },
        {
          "value": 240,
          "day": "2023-09-28"
        },
        {
          "value": 76,
          "day": "2023-12-30"
        },
        {
          "value": 331,
          "day": "2023-11-09"
        },
        {
          "value": 2,
          "day": "2018-03-18"
        },
        {
          "value": 160,
          "day": "2023-09-17"
        },
        {
          "value": 74,
          "day": "2023-08-28"
        },
        {
          "value": 248,
          "day": "2023-01-11"
        },
        {
          "value": 123,
          "day": "2023-10-09"
        },
        {
          "value": 146,
          "day": "2023-10-04"
        },
        {
          "value": 10,
          "day": "2023-09-01"
        },
        {
          "value": 211,
          "day": "2018-05-25"
        },
        {
          "value": 214,
          "day": "2023-08-05"
        },
        {
          "value": 169,
          "day": "2023-07-31"
        },
        {
          "value": 129,
          "day": "2023-09-01"
        },
        {
          "value": 339,
          "day": "2023-11-14"
        },
        {
          "value": 200,
          "day": "2023-09-12"
        },
        {
          "value": 141,
          "day": "2023-12-17"
        },
        {
          "value": 255,
          "day": "2023-06-11"
        },
        {
          "value": 108,
          "day": "2023-04-19"
        },
        {
          "value": 199,
          "day": "2023-02-10"
        },
        {
          "value": 235,
          "day": "2023-05-29"
        },
        {
          "value": 332,
          "day": "2023-05-24"
        },
        {
          "value": 103,
          "day": "2018-05-02"
        },
        {
          "value": 366,
          "day": "2023-06-04"
        },
        {
          "value": 350,
          "day": "2023-12-20"
        },
        {
          "value": 11,
          "day": "2023-08-05"
        },
        {
          "value": 392,
          "day": "2023-10-17"
        },
        {
          "value": 25,
          "day": "2023-03-05"
        },
        {
          "value": 252,
          "day": "2023-02-21"
        },
        {
          "value": 143,
          "day": "2023-11-25"
        },
        {
          "value": 156,
          "day": "2018-02-15"
        },
        {
          "value": 344,
          "day": "2023-02-09"
        },
        {
          "value": 36,
          "day": "2018-03-17"
        },
        {
          "value": 241,
          "day": "2023-03-29"
        },
        {
          "value": 243,
          "day": "2023-09-21"
        },
        {
          "value": 170,
          "day": "2023-05-09"
        },
        {
          "value": 94,
          "day": "2023-05-03"
        },
        {
          "value": 164,
          "day": "2023-09-11"
        },
        {
          "value": 82,
          "day": "2023-11-26"
        },
        {
          "value": 76,
          "day": "2018-03-07"
        },
        {
          "value": 247,
          "day": "2023-10-25"
        },
        {
          "value": 180,
          "day": "2023-08-17"
        },
        {
          "value": 120,
          "day": "2023-06-17"
        },
        {
          "value": 217,
          "day": "2023-03-10"
        },
        {
          "value": 376,
          "day": "2023-01-30"
        },
        {
          "value": 52,
          "day": "2018-03-08"
        },
        {
          "value": 50,
          "day": "2023-08-06"
        },
        {
          "value": 332,
          "day": "2023-08-14"
        },
        {
          "value": 124,
          "day": "2023-05-15"
        },
        {
          "value": 168,
          "day": "2018-03-03"
        },
        {
          "value": 248,
          "day": "2023-01-13"
        },
        {
          "value": 165,
          "day": "2023-11-12"
        },
        {
          "value": 322,
          "day": "2023-10-03"
        },
        {
          "value": 85,
          "day": "2023-11-08"
        },
        {
          "value": 117,
          "day": "2023-07-31"
        },
        {
          "value": 144,
          "day": "2023-02-20"
        },
        {
          "value": 208,
          "day": "2023-07-09"
        },
        {
          "value": 286,
          "day": "2023-04-08"
        },
        {
          "value": 107,
          "day": "2023-08-09"
        },
        {
          "value": 49,
          "day": "2018-02-05"
        },
        {
          "value": 364,
          "day": "2018-06-03"
        },
        {
          "value": 302,
          "day": "2023-12-27"
        },
        {
          "value": 363,
          "day": "2023-05-04"
        },
        {
          "value": 384,
          "day": "2023-10-24"
        },
        {
          "value": 346,
          "day": "2023-10-07"
        },
        {
          "value": 339,
          "day": "2023-12-23"
        },
        {
          "value": 330,
          "day": "2018-04-07"
        },
        {
          "value": 362,
          "day": "2023-11-28"
        },
        {
          "value": 279,
          "day": "2023-11-24"
        },
        {
          "value": 339,
          "day": "2018-01-09"
        },
        {
          "value": 275,
          "day": "2023-11-27"
        },
        {
          "value": 22,
          "day": "2018-06-21"
        },
        {
          "value": 341,
          "day": "2023-10-09"
        },
        {
          "value": 299,
          "day": "2018-03-29"
        },
        {
          "value": 320,
          "day": "2023-08-10"
        },
        {
          "value": 164,
          "day": "2023-07-17"
        },
        {
          "value": 323,
          "day": "2023-07-16"
        },
        {
          "value": 16,
          "day": "2023-09-04"
        },
        {
          "value": 166,
          "day": "2023-12-16"
        },
        {
          "value": 18,
          "day": "2023-02-01"
        },
        {
          "value": 21,
          "day": "2023-11-29"
        },
        {
          "value": 43,
          "day": "2023-02-19"
        },
        {
          "value": 364,
          "day": "2023-06-20"
        },
        {
          "value": 370,
          "day": "2023-07-21"
        },
        {
          "value": 231,
          "day": "2018-02-20"
        },
        {
          "value": 392,
          "day": "2023-12-10"
        },
        {
          "value": 267,
          "day": "2023-12-21"
        },
        {
          "value": 389,
          "day": "2023-06-14"
        },
        {
          "value": 20,
          "day": "2018-05-12"
        },
        {
          "value": 66,
          "day": "2023-05-24"
        },
        {
          "value": 169,
          "day": "2023-03-20"
        },
        {
          "value": 248,
          "day": "2023-09-16"
        },
        {
          "value": 258,
          "day": "2023-10-20"
        },
        {
          "value": 32,
          "day": "2023-08-25"
        },
        {
          "value": 67,
          "day": "2023-06-23"
        },
        {
          "value": 88,
          "day": "2023-10-10"
        },
        {
          "value": 389,
          "day": "2023-06-13"
        },
        {
          "value": 44,
          "day": "2023-08-12"
        },
        {
          "value": 363,
          "day": "2018-02-24"
        },
        {
          "value": 278,
          "day": "2023-04-02"
        },
        {
          "value": 63,
          "day": "2023-03-26"
        },
        {
          "value": 217,
          "day": "2018-06-07"
        },
        {
          "value": 139,
          "day": "2018-05-17"
        },
        {
          "value": 5,
          "day": "2023-05-15"
        },
        {
          "value": 283,
          "day": "2023-06-05"
        },
        {
          "value": 361,
          "day": "2023-10-06"
        },
        {
          "value": 335,
          "day": "2023-03-17"
        },
        {
          "value": 84,
          "day": "2023-04-25"
        },
        {
          "value": 331,
          "day": "2023-09-06"
        },
        {
          "value": 324,
          "day": "2023-11-19"
        },
        {
          "value": 50,
          "day": "2023-06-18"
        },
        {
          "value": 113,
          "day": "2023-01-13"
        },
        {
          "value": 134,
          "day": "2023-08-16"
        },
        {
          "value": 313,
          "day": "2023-02-15"
        },
        {
          "value": 35,
          "day": "2023-10-27"
        },
        {
          "value": 3,
          "day": "2023-05-16"
        },
        {
          "value": 235,
          "day": "2018-03-14"
        },
        {
          "value": 302,
          "day": "2023-12-20"
        },
        {
          "value": 335,
          "day": "2023-09-08"
        },
        {
          "value": 52,
          "day": "2023-08-28"
        },
        {
          "value": 154,
          "day": "2023-01-09"
        },
        {
          "value": 87,
          "day": "2023-04-01"
        },
        {
          "value": 326,
          "day": "2023-07-09"
        },
        {
          "value": 35,
          "day": "2023-10-29"
        },
        {
          "value": 312,
          "day": "2023-12-02"
        },
        {
          "value": 71,
          "day": "2023-12-11"
        },
        {
          "value": 124,
          "day": "2018-08-02"
        },
        {
          "value": 318,
          "day": "2018-04-25"
        },
        {
          "value": 166,
          "day": "2023-03-02"
        },
        {
          "value": 287,
          "day": "2023-02-21"
        },
        {
          "value": 103,
          "day": "2023-01-05"
        },
        {
          "value": 163,
          "day": "2018-06-09"
        },
        {
          "value": 379,
          "day": "2018-03-15"
        },
        {
          "value": 324,
          "day": "2023-01-20"
        },
        {
          "value": 374,
          "day": "2018-05-20"
        },
        {
          "value": 46,
          "day": "2023-04-22"
        },
        {
          "value": 114,
          "day": "2023-07-11"
        },
        {
          "value": 152,
          "day": "2023-07-07"
        },
        {
          "value": 374,
          "day": "2023-12-05"
        },
        {
          "value": 293,
          "day": "2018-01-01"
        },
        {
          "value": 291,
          "day": "2023-06-15"
        },
        {
          "value": 192,
          "day": "2023-09-09"
        },
        {
          "value": 284,
          "day": "2018-05-18"
        },
        {
          "value": 386,
          "day": "2023-11-28"
        }
      ];
    return(
        <Card className='graph'>
            <div className="graphTitle">
                Today's Record
            </div>
            <CalendarG data={d}>

            </CalendarG>
        </Card>
    );
};

export default Graph;