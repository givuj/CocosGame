import { ILevel } from ".";
import { TILE_TYPE_ENUM } from "../Enums/Index";

const mapInfo = [
    [
      {
        src: null,
        type: null,
      },
      {
        src: null,
        type: null,
      },
      {
        src: null,
        type: null,
      },
      {
        src: null,
        type: null,
      },
      {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 18,
        type: TILE_TYPE_ENUM.CLIFF_LEFT,
      },
    ],
    [
      {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 21,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER,
      },
    ],
    [
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER,
      },
    ],
    [
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
      },
      {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 20,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER,
      },
    ],
    [
      {
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP,
      },
      {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 19,
        type: TILE_TYPE_ENUM.CLIFF_RIGHT,
      },
    ],
    [
      {
        src: null,
        type: null,
      },
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 18,
        type: TILE_TYPE_ENUM.CLIFF_LEFT,
      },
    ],
    [
      {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
      },
      {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP,
      },
      {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 21,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 19,
        type: TILE_TYPE_ENUM.CLIFF_RIGHT,
      },
    ],
    [
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER,
      },
    ],
    [
      {
        src: 9,
        type: TILE_TYPE_ENUM.WALL_ROW,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 16,
        type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
      },
      {
        src: 13,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 1,
        type: TILE_TYPE_ENUM.FLOOR,
      },
      {
        src: 20,
        type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
      },
      {
        src: 17,
        type: TILE_TYPE_ENUM.CLIFF_CENTER,
      },
    ],
    [
      {
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 15,
        type: TILE_TYPE_ENUM.WALL_RIGHT_TOP,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 5,
        type: TILE_TYPE_ENUM.WALL_COLUMN,
      },
      {
        src: 14,
        type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
      },
      {
        src: 19,
        type: TILE_TYPE_ENUM.CLIFF_RIGHT,
      },
    ],
  ];


  const Level:ILevel = {
    mapInfo,
  }
  export default Level
