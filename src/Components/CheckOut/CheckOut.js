import React from "react"
export const CheckOut = () => {
  return (
    <div>
      <div>
        <div className="w-full md:w-96 md:max-w-full mx-auto">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <form>
              <label className="block mb-2">
                <span className="text-gray-700">Address line 1</span>
                <input
                  name="address1"
                  type="text"
                  className="block w-full mt-1   border-gray-300 shadow-sm rounded-md"
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Address line 2</span>
                <input
                  name="address2"
                  type="text"
                  className="
      block
      w-full
      mt-1
      border-gray-300
      rounded-md
      shadow-sm
      focus:border-indigo-300
      focus:ring
      focus:ring-indigo-200
      focus:ring-opacity-50
    "
                  placeholder
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">City</span>
                <input
                  name="city"
                  type="text"
                  className="
      block
      w-full
      mt-1
      border-gray-300
      rounded-md
      shadow-sm
      focus:border-indigo-300
      focus:ring
      focus:ring-indigo-200
      focus:ring-opacity-50
    "
                  placeholder
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">State</span>
                <input
                  name="state"
                  type="text"
                  className="
      block
      w-full
      mt-1
      border-gray-300
      rounded-md
      shadow-sm
      focus:border-indigo-300
      focus:ring
      focus:ring-indigo-200
      focus:ring-opacity-50
    "
                  placeholder
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Zip/Postal code</span>
                <input
                  name="zip"
                  type="text"
                  className="
      block
      w-full
      mt-1
      border-gray-300
      rounded-md
      shadow-sm
      focus:border-indigo-300
      focus:ring
      focus:ring-indigo-200
      focus:ring-opacity-50
    "
                  placeholder
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Mobile</span>
                <input
                  name="telephone"
                  type="text"
                  className="
      block
      w-full
      mt-1
      border-gray-300
      rounded-md
      shadow-sm
      focus:border-purple-300
      focus:ring
      focus:ring-purple-200
      focus:ring-opacity-50
    "
                />
              </label>

              <div className="mb-2">
                <button
                  type="submit"
                  className="
      h-10
      px-5
      text-purple-100
      bg-purple-700
      rounded-lg
      transition-colors
      duration-150
      focus:shadow-outline
      hover:bg-purple-800
    "
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
