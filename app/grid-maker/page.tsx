import React from "react";

const gridmaker = () => {
  return (
    <div>
      <div>
        <div className="bg-gray-200 space-x-4">
          <button>
            edit - dropdown - undo, clear, copy/paste? add/remove rows / colls
          </button>
          <button>new</button>
          <button>save</button>
          <button>rename? </button>
        </div>

        {/* hide this h1 when submit button is pressed */}
        <h1 className="bg-yellow-200">
          Welcome to the grid knit designer. here you can draw your own knitting
          charts using colour and symbols to produce your own designs. To begin,
          please select the size of the knit grid you would like to use - This
          can also be edited later using the toolbar
        </h1>
      </div>
      <form>
        <label>
          Collumns (width):
          <input type="number" name="collumns" />
        </label>

        <label>
          Rows (height):
          <input type="number" name="rows" />
        </label>

        <input type="submit" value="Submit (creates grid)" />
      </form>

      <div className="bg-gray-200 space-x-4">
        {/* explanation of each option somewhere - perhaps in the box on click? or in a dropdown? */}
        <button> TOOLS</button>
        <button> SELECT</button>
        <button> SYMBOLS</button>
        <button>BACKGROUND COLOUR SELECT</button>
        <button>COLOUR SELECT </button>
        <button>DRAW TOOLS</button>
        <button>ZOOM + / -</button>
      </div>
    </div>
  );
};

export default gridmaker;
