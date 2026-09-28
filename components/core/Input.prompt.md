**Input** — labelled text field with focus ring and helper/error states. Leading icon optional.

```jsx
<Input label="Dokąd jedziesz?" placeholder="Wpisz adres docelowy" iconLeft={<MapPin size={18} />} />
<Input label="Kod PIN" error="Nieprawidłowy kod" />
```

Props: `label`, `value`, `onChange`, `placeholder`, `type`, `iconLeft`, `helper`, `error`, `disabled`.
