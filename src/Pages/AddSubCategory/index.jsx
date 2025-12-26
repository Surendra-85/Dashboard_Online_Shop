import { useState } from "react";

export default function AddSubCategory() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    oldPrice: "",
    discount: "",
    stock: "",
    status: "",
    tags: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Product Published Successfully ✅");
  };
 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({
        ...form,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };
    

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      
      {/* Header */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-lg font-semibold">  Add New Sub Category
</h2>
      </div>

      <form onSubmit={submitHandler} className="space-y-4">
        
        {/* Basic Information */}
       

        {/* Media And Publish */}
<div className="bg-white p-4 rounded shadow">
<div><div className="grid grid-cols-3 gap-10 mt-3">
            <div>
              <label className="label  !text-[16px] font-[700]">  Product Category</label>
              <select className="input" name="category" onChange={handleChange}>
                <option>None</option>
                <option>Electronics</option>
                <option>Fashion</option>
              </select>
            </div>

            

            <div>
            <label className="label !text-[16px] font-[700]" >Sub  Category Name</label>

              <input className="input" name="price" onChange={handleChange} />
            </div>
          </div>

            </div>

<br></br>
  <button
    type="submit"
    className="w-full mt-4 bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
  >
    Publish And View
  </button>
</div>


     

      </form>
    </div>
  );
}

 
