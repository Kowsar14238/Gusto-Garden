const AddFood = () => {
  
  //Handle form submission
  const handleAddFood = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const category = form.category.value;
    const image_url = form.image_url.value;
    const description = form.description.value;

    //Create a new object for every submission
    const newFood = {
      name,
      quantity,
      price,
      category,
      image_url,
      description,
    };
    console.log(newFood);

    //Send data to server
    fetch("http://localhost:5000/add-food", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("Food item added successfully:", data);
        } else {
          console.error("Error adding food item:", data.message);
        }
      })
      .catch((error) => console.error("Network error:", error));
  };

  return (
    <div>
      <div className="min-h-screen my-12 mx-2">
        <form
          onSubmit={handleAddFood}
          className="max-w-md md:max-w-lg mx-auto p-6 bg-neutral-600 rounded-lg"
        >
          <div className="mb-5">
            <input
              id="name"
              type="text"
              placeholder="Food Name"
              className="input input-bordered w-full input-info "
            />
          </div>

          <div className="md:grid grid-flow-col gap-5 w-full">
            <div className="mb-5">
              <input
                id="quantity"
                type="text"
                placeholder="Food Quantity"
                className="input input-bordered w-full input-info"
              />
            </div>

            <div className="mb-5">
              <input
                id="price"
                type="number"
                placeholder="Food Price"
                className="input input-bordered w-full input-info"
              />
            </div>
          </div>

          <div className="mb-5">
            <input
              id="category"
              type="text"
              placeholder="Category"
              className="input input-bordered w-full input-info"
            />
          </div>

          <div className="mb-5">
            <input
              id="image_url"
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full input-info"
            />
          </div>

          <div className="mb-5">
            <textarea
              id="description"
              placeholder="Description of the food"
              className="textarea textarea-bordered w-full textarea-info h-40 resize-none"
            ></textarea>
          </div>

          {/* Add Button */}
          <div className="relative z-0 w-full mb-5 group">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
