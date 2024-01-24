import React from "react";

const maker = () => {
  return (
    <div>
      <div className="bg-gray-200 space-x-4">
        <button>
          edit - dropdown - undo, clear, copy/paste? add/remove rows / colls
        </button>
        <button>new</button>
        <button>save</button>
        <button>rename? </button>
      </div>

<div> <h1 className="bg-yellow-200">
          Please begin by selecting the yarn weight you will be using
          <form>
            {/* dropdown which will have the yarn weights to choose from */}
            <input type="text" />
          </form>
        </h1></div>


      <div>
        {" "}
        <h1 className="bg-yellow-200">
          Select the template knit you would like to create
        </h1>
        <button>HAT</button>
        <button>SCARF</button>
        <button>CARDIGAN</button>
        <button>JUMPER</button>
      </div>

      <h1 className="bg-yellow-200">Next, insert the measurements for the garment</h1>
      <form>

{/* form measurements will be given based on the selected garment */}
        <label>
          <input type="number" name="collumns" />
        </label>

        <label>
          <input type="number" name="rows" />
        </label>

        <input type="submit" value="Submit (creates grid)" />
        {/* template will change for each garment eg. sleeve, front and back */}
      </form>
    </div>
  );
};

export default maker;
