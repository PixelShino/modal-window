# Модальное окно | Modal Window

<details>
<summary>English version</summary>

## Modal Window Component

A simple, reusable React modal window component with customizable content and actions.

### Features

- Customizable title and content
- Multiple button options
- Flexible styling
- Easy integration

### Tech Stack

- React
- Vite
- CSS
- GitHub Pages

### Usage

```jsx
import { Modal, Button } from './components';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>

      <Modal
        title='Confirm action'
        content='Are you sure you want to continue?'
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      >
        <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
        <Button onClick={() => handleConfirm()}>Confirm</Button>
      </Modal>
    </>
  );
}
```

</details>

## Компонент модального окна

Простой, многоразовый компонент модального окна на React с настраиваемым содержимым и действиями.

### Возможности

- Настраиваемый заголовок и содержимое
- Несколько вариантов кнопок
- Гибкая стилизация
- Простая интеграция

### Технологический стек

- React
- Vite
- CSS
- GitHub Pages

### Использование

```jsx
import { Modal, Button } from './components';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Открыть окно</Button>

      <Modal
        title='Подтвердите действие'
        content='Вы уверены, что хотите продолжить?'
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      >
        <Button onClick={() => setIsModalOpen(false)}>Отмена</Button>
        <Button onClick={() => handleConfirm()}>Подтвердить</Button>
      </Modal>
    </>
  );
}
```
