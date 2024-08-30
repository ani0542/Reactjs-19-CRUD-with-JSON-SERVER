import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJobPage = ({ addJobSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'Full-Time',
    location: '',
    description: '',
    salary: 'Under $50K',
    companyName: '',
    companyDescription: '',
    contactEmail: '',
    contactPhone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    const { title, type, location, description, salary, companyName, companyDescription, contactEmail, contactPhone } = formData;
    
    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addJobSubmit(newJob);
    toast.success('Job Added Successfully');
    navigate('/jobs');
  };

  const formFields = [
    { label: 'Job Listing Name', type: 'text', id: 'title', placeholder: 'eg. Beautiful Apartment In Miami' },
    { label: 'Location', type: 'text', id: 'location', placeholder: 'Company Location' },
    { label: 'Company Name', type: 'text', id: 'companyName', placeholder: 'Company Name' },
    { label: 'Contact Email', type: 'email', id: 'contactEmail', placeholder: 'Email address for applicants' },
    { label: 'Contact Phone', type: 'tel', id: 'contactPhone', placeholder: 'Optional phone for applicants' },
  ];

  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Add Job</h2>

            <div className='mb-4'>
              <label htmlFor='type' className='block text-gray-700 font-bold mb-2'>Job Type</label>
              <select
                id='type'
                name='type'
                className='border rounded w-full py-2 px-3'
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value='Full-Time'>Full-Time</option>
                <option value='Part-Time'>Part-Time</option>
                <option value='Remote'>Remote</option>
                <option value='Internship'>Internship</option>
              </select>
            </div>

            {formFields.map(({ label, type, id, placeholder }) => (
              <div className='mb-4' key={id}>
                <label htmlFor={id} className='block text-gray-700 font-bold mb-2'>{label}</label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  className='border rounded w-full py-2 px-3'
                  placeholder={placeholder}
                  value={formData[id]}
                  onChange={handleChange}
                  required={id !== 'contactPhone'}
                />
              </div>
            ))}

            <div className='mb-4'>
              <label htmlFor='description' className='block text-gray-700 font-bold mb-2'>Description</label>
              <textarea
                id='description'
                name='description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='Add any job duties, expectations, requirements, etc'
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label htmlFor='salary' className='block text-gray-700 font-bold mb-2'>Salary</label>
              <select
                id='salary'
                name='salary'
                className='border rounded w-full py-2 px-3'
                value={formData.salary}
                onChange={handleChange}
                required
              >
                <option value='Under $50K'>Under $50K</option>
                <option value='$50K - 60K'>$50K - $60K</option>
                <option value='$60K - 70K'>$60K - $70K</option>
                <option value='$70K - 80K'>$70K - $80K</option>
                <option value='$80K - 90K'>$80K - $90K</option>
                <option value='$90K - 100K'>$90K - $100K</option>
                <option value='$100K - 125K'>$100K - $125K</option>
                <option value='$125K - 150K'>$125K - $150K</option>
                <option value='$150K - 175K'>$150K - $175K</option>
                <option value='$175K - 200K'>$175K - $200K</option>
                <option value='Over $200K'>Over $200K</option>
              </select>
            </div>

            <div className='mb-4'>
              <label htmlFor='companyDescription' className='block text-gray-700 font-bold mb-2'>Company Description</label>
              <textarea
                id='companyDescription'
                name='companyDescription'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='What does your company do?'
                value={formData.companyDescription}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Add Job
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;
 