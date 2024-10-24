import React, { useState } from 'react';

const CallbackForm = () => {
  // State for the form fields
  const [formData, setFormData] = useState({
    name: '',
    home: '',
    work: '',
    page: '',
    cell: '',
    address: '',
    wants: '',
    association: '',
    tags: []
  });

  const [newTag, setNewTag] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add new tag
  const handleAddTag = () => {
    if (newTag) {
      setFormData({ ...formData, tags: [...formData.tags, newTag] });
      setNewTag(''); // Clear input field
    }
  };

  // Delete tag
  const handleDeleteTag = (tag) => {
    setFormData({ ...formData, tags: formData.tags.filter((t) => t !== tag) });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-200 p-10">
      {/* Main Form Area */}
      <div className="flex bg-white border border-gray-300 rounded-md w-full max-w-5xl h-full">
        {/* Left Side: Form */}
        <div className="w-3/4 p-8">
          <h2 className="text-4xl font-bold mb-6">Enter Callbacks</h2>
          <div className="mb-6">
            <label className="block font-bold text-3xl">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border p-3 w-full text-3xl font-bold"
              tabIndex={1}
            />
          </div>
          <div className="mb-6">
            <div>
              <label className="block font-bold text-3xl">Home #:</label>
              <input
                type="text"
                name="home"
                value={formData.home}
                onChange={handleInputChange}
                className="border p-3 w-full text-3xl font-bold"
                tabIndex={2}
              />
            </div>
            <div>
              <label className="font-bold text-3xl">Work #:</label>
              <input
                type="text"
                name="work"
                value={formData.work}
                onChange={handleInputChange}
                className="border p-3 w-full text-3xl font-bold"
                tabIndex={3}
              />
            </div>
            <div>
              <label className="block font-bold text-3xl">Page #:</label>
              <input
                type="text"
                name="page"
                value={formData.page}
                onChange={handleInputChange}
                className="border w-full p-3 text-3xl font-bold"
                tabIndex={4}
              />
            </div>
            <div>
              <label className="font-bold text-3xl">Cell #:</label>
              <input
                type="text"
                name="cell"
                value={formData.cell}
                onChange={handleInputChange}
                className="border p-3 w-full text-3xl font-bold"
                tabIndex={5}
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="font-bold text-3xl">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="border p-3 w-full text-3xl font-bold"
              tabIndex={6}
            />
          </div>
          <div className="mb-6">
            <label className="font-bold text-3xl">Wants:</label>
            <input
              type="text"
              name="wants"
              value={formData.wants}
              onChange={handleInputChange}
              className="border p-3 w-full text-3xl font-bold"
              tabIndex={7}
            />
          </div>
          <div className="mb-6">
            <label className="font-bold text-3xl">How are you associated with this client?</label>
            <input
              type="text"
              name="association"
              value={formData.association}
              onChange={handleInputChange}
              className="border p-3 w-full text-3xl font-bold"
              tabIndex={8}
            />
          </div>

          {/* Tags Input Section */}
          <div className="mb-6">
            <label className="font-bold text-3xl">Tags:</label>
            <div className="flex gap-4">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="border p-3 text-3xl font-bold w-full"
                tabIndex={9}
              />
              <button
                onClick={handleAddTag}
                className="bg-green-500 text-white px-6 py-3 rounded text-lg"
                tabIndex={10}
              >
                Add
              </button>
            </div>
            <ul className="mt-4">
              {formData.tags.map((tag, index) => (
                <li key={index} className="flex justify-between text-lg">
                  {tag}
                  <button
                    onClick={() => handleDeleteTag(tag)}
                    className="text-red-500"
                  >
                    Del
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Instructions Panel */}
        <div className="w-1/4 bg-green-200 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-bold mb-4">Instructions</h3>
            <p className="text-3xl font bold">
              Please use the <strong>TAB</strong> button to navigate between the
              entries and <strong>SHIFT + TAB</strong> to navigate in reverse
              direction.
            </p>
          </div>
          {/* Bottom buttons */}
          <div className="mt-10 space-y-6">
            <button className="bg-green-500 text-white px-6 py-4 w-full rounded text-lg">
              Add Call
            </button>
            <button className="bg-yellow-500 text-white px-6 py-4 w-full rounded text-lg">
              Next Step
            </button>
            <button className="bg-teal-500 text-white px-6 py-4 w-full rounded text-lg">
              Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallbackForm;
