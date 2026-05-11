import { useState } from 'react';
import Button from '../ui/Button';
import { formFields, type ContentType } from '../../data/formField';

export default function TypeSelector() {
  const [selected, setSelected] = useState<ContentType | null>(null);
  const [formValue, setFormValue] = useState<Record<string, string>>({});

  console.log(formValue);
  const handleChange = (name: string, value: string) => {
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = (type: ContentType) => {
    setSelected((prev) => (prev === type ? null : type));
  };

  return (
    <div className="bg-bg-card w-[500px] flex flex-col justify-center gap-7 p-4 rounded-3xl">
      <div className="grid grid-cols-4 gap-2 w-full">
        <Button
          onClick={() => handleClick('blog')}
          className={`text-xs font-semibold rounded-full py-1 border transition 
        ${
          selected === 'blog'
            ? 'bg-purple-600 text-white border-purple-600'
            : 'bg-purple-200 text-purple-600 border-purple-400'
        }
        `}
        >
          Blog
        </Button>

        <Button
          onClick={() => handleClick('email')}
          className={`text-xs font-semibold rounded-full py-1 border transition
        ${
          selected === 'email'
            ? 'bg-green-600 text-white border-green-600'
            : 'bg-green-200 text-green-600 border-green-400'
        }
        `}
        >
          Email
        </Button>

        <Button
          onClick={() => handleClick('adCopy')}
          className={`text-xs font-semibold rounded-full py-1 border transition
        ${
          selected === 'adCopy'
            ? 'bg-orange-600 text-white border-orange-600'
            : 'bg-orange-200 text-orange-600 border-orange-400'
        }
        `}
        >
          Ad Copy
        </Button>

        <Button
          onClick={() => handleClick('social')}
          className={`text-xs font-semibold rounded-full py-1 border transition
            ${
              selected === 'social'
                ? 'bg-pink-600 text-white border-pink-600'
                : 'bg-pink-200 text-pink-600 border-pink-400'
            }`}
        >
          Social
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {selected &&
          formFields[selected].map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              {/* lable */}
              <label className="text-sm text-text-primary">{field.label}</label>

              {/* input */}
              {field.type === 'input' && (
                <input
                  type="text"
                  placeholder={field.placeholder}
                  value={formValue[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full bg-bg-input py-3 text-text-primary placeholder:text-text-secondary border border-bg-base outline-none rounded-2xl px-4"
                />
              )}

              {/* select */}
              {field.type === 'select' && (
                <select
                  value={formValue[field.name || '']}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full bg-bg-input py-3 text-text-primary border border-bg-base outline-none rounded-2xl px-4"
                >
                  <option value="">Select...</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
      </div>

      <Button className="w-full bg-bg-base text-white rounded-full py-2">
        Generate
      </Button>
    </div>
  );
}
