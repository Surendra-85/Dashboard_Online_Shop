import { useState } from "react";

export default function ProductUpload() {
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
        <h2 className="text-lg font-semibold">Product Upload</h2>
      </div>

      <form onSubmit={submitHandler} className="space-y-4">
        
        {/* Basic Information */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Basic Information</h3>

          <label className="label">Title</label>
          <input className="input" name="title" onChange={handleChange} />

          <label className="label">Description</label>
          <textarea className="input h-24" name="description" onChange={handleChange}></textarea>

          <div className="grid grid-cols-3 gap-4 mt-3">
            <div>
              <label className="label">Category</label>
              <select className="input" name="category" onChange={handleChange}>
                <option>None</option>
                <option>Electronics</option>
                <option>Fashion</option>
              </select>
            </div>

            <div>
              <label className="label">Brand</label>
              <select className="input" name="brand" onChange={handleChange}>
                <option>None</option>
                <option>Apple</option>
                <option>Samsung</option>
              </select>
            </div>

            <div>
              <label className="label">Price</label>
              <input className="input" name="price" onChange={handleChange} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-3">
            <div>
              <label className="label">Old Price</label>
              <input className="input" name="oldPrice" onChange={handleChange} />
            </div>

            <div>
              <label className="label">Discount</label>
              <input className="input" name="discount" onChange={handleChange} />
            </div>

            <div>
              <label className="label">Product Stock</label>
              <input className="input" name="stock" onChange={handleChange} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <label className="label">Product Status</label>
              <select className="input" name="status" onChange={handleChange}>
                <option>None</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div>
              <label className="label">Tags</label>
              <input className="input" name="tags" onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* Media And Publish */}
<div className="bg-white p-4 rounded shadow">
  <h3 className="font-semibold mb-3">Media And Publish</h3>

  <div className="flex gap-4 items-center">
    
    {/* Image Preview */}
    <div className="w-24 h-24 border-2 border-dashed flex items-center justify-center rounded">
      {form.imagePreview ? (
        <img
          src={form.imagePreview}
          alt="preview"
          className="w-full h-full object-cover rounded"
        />
      ) : (
        <span className="text-gray-400 text-sm">No Image</span>
      )}
    </div>

    <div className="w-24 h-24 border-2 border-dashed flex items-center justify-center rounded">
      {form.imagePreview ? (
        <img
          src={form.imagePreview}
          alt="preview"
          className="w-full h-full object-cover rounded"
        />
      ) : (
        <span className="text-gray-400 text-sm">No Image</span>
      )}
    </div>
    <div className="w-24 h-24 border-2 border-dashed flex items-center justify-center rounded">
      {form.imagePreview ? (
        <img
          src={form.imagePreview}
          alt="preview"
          className="w-full h-full object-cover rounded"
        />
      ) : (
        <span className="text-gray-400 text-sm">No Image</span>
      )}
    </div>
    <div className="w-24 h-24 border-2 border-dashed flex items-center justify-center rounded">
      {form.imagePreview ? (
        <img
          src={form.imagePreview}
          alt="preview"
          className="w-full h-full object-cover rounded"
        />
      ) : (
        <span className="text-gray-400 text-sm">No Image</span>
      )}
    </div>
    <div className="w-24 h-24 border-2 border-dashed flex items-center justify-center rounded">
      {form.imagePreview ? (
        <img
          src={form.imagePreview}
          alt="preview"
          className="w-full h-full object-cover rounded"
        />
      ) : (
        <span className="text-gray-400 text-sm">No Image</span>
      )}
    </div>

    {/* File Input */}
    <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      className="text-sm"
    />
  </div>

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
