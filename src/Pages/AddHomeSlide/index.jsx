import { useState } from "react";

export default function AddHomeSlide() {
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
        <h2 className="text-lg font-semibold"> Add Home Slide
</h2>
      </div>

      <form onSubmit={submitHandler} className="space-y-4">
        
        {/* Basic Information */}
       

        {/* Media And Publish */}
<div className="bg-white p-4 rounded shadow">
  <h3 className="font-semibold mb-3">Media And Publish</h3>

  <div className="flex gap-9 items-center">
    
    {/* Image Preview */}
    <div className=" border-2 border-dashed flex items-center justify-center rounded">
      {form.imagePreview ? (
        <img
          src={form.imagePreview}
          alt="preview"
          className="w-full h-full object-cover rounded"
        />
      ) : (
        <span className="text-gray-400 text-sm">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShU5RGj0QW-aK-Aqe-_BpNB8EiJw6pZkwgtw&s" alt="" className="w-[300px] h-full" />
        </span>
      )}
    </div>

    
   

    {/* File Input */}
    <div className="text-[14px]  w-50 h-23 border-2 border-gray-400 flex items-center justify-center rounded"
    >
    <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      className="ml-25"
    />
    </div>
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
