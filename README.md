# useSecureLocalStorage

[![npm version](https://img.shields.io/npm/v/secure-local-storage-hook.svg)](https://www.npmjs.com/package/secure-local-storage-hook)  
[![license](https://img.shields.io/npm/l/secure-local-storage-hook.svg)](LICENSE)

**useSecureLocalStorage** is a supercharged version of React's `useState` hook, designed to securely store and persist state in the browser's local storage with typescript support. So that, a user can make sure strictly typed data while storing or retrieving from local storage. Built on top of [react-secure-storage](https://www.npmjs.com/package/react-secure-storage), this library not only encrypts your data but also ensures strict typing and synchronization for the most up-to-date state.

---

## Why useSecureLocalStorage?

- **Secure Data Storage:** Your data is securely encrypted before being saved in local storage.
- **Type Safety:** Fully supports custom types for strong typing in TypeScript.
- **Data Persistence:** Persist your state seamlessly across page reloads.
- **Real-Time Updates:** Always retrieve the most up-to-date data from local storage.

---

## Installation

To install the library, use the following command:

```bash
npm i secure-local-storage-hook

or

yarn add secure-local-storage-hook
```

---

## Usage

Here’s an example of how to use **useSecureLocalStorage** in your React application:

```tsx
// Define your custom type
import useSecureLocalStorage from "secure-local-storage-hook";

type AppleType = {
  name: string;
  color: string;
  isRipe: boolean;
};

const App = () => {
  const [apple, setApple] = useSecureLocalStorage<AppleType>("apple", {
    name: "Granny Smith",
    color: "green",
    isRipe: false,
  });

  const updateApple = () => {
    setApple({
      name: "Red Delicious",
      color: "red",
      isRipe: true,
    });
  };

  return (
    <div>
      <h1>Apple Storage</h1>
      <p>Name: {apple.name}</p>
      <p>Color: {apple.color}</p>
      <p>Is Ripe: {apple.isRipe ? "Yes" : "No"}</p>
      <button onClick={updateApple}>Update Apple</button>
    </div>
  );
};

export default App;
```

---

## API

### `useSecureLocalStorage`

#### Syntax:

```tsx
const [value, setValue] = useSecureLocalStorage<Type>(key: string, defaultValue: Type);
```

#### Parameters:

- `key` _(string)_: A unique key for the local storage item.
- `defaultValue` _(Type)_: The initial value to set if no value is found in local storage.

#### Returns:

- `value` _(Type)_: The current value stored in local storage.
- `setValue` _(function)_: A function to update the value in local storage.

#### Example:

```tsx
const [user, setUser] = useSecureLocalStorage<User>("user", {
  name: "John Doe",
  age: 30,
});
```

---

## Features

- **Encryption:** All data is encrypted before being stored, ensuring maximum security.
- **Custom Types:** Supports TypeScript custom types, making it ideal for strongly typed applications.
- **Data Syncing:** Automatically retrieves the latest version of your data.
- **Easy Integration:** Simple API that mimics React's `useState`.

---

## Contributions

Contributions are welcome! Feel free to open an issue or submit a pull request on [GitHub](https://github.com/rabahalishah/useSecureLocalStorage.git).

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
