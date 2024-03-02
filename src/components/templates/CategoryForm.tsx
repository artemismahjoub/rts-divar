import { useState } from "react";

type Props = {};

const CategoryForm = (props: Props) => {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  // test

  const changeHandler = (event: React.FormEvent<HTMLFormElement>) => {
    setForm({
      ...form,
      [(event.target as HTMLInputElement).name]: (
        event.target as HTMLInputElement
      ).value,
    });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <h3>دسته بندی جدید</h3>
      <label htmlFor="name">اسم دسته بندی</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" />
      <label htmlFor="icon">آیکون</label>
      <input type="text" name="icon" id="icon" />
      <button type="submit">ایجاد</button>
    </form>
  );
};

export default CategoryForm;
