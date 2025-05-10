import { useEffect, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { transformValue, transformValueOnBlur, transformValueOnChange } from 'minimal-shared/utils';

import TextField from '@mui/material/TextField';

import useImageFileStore from 'src/store/ImageFileStore';

// ----------------------------------------------------------------------

export function RHFTextField({ name, helperText, slotProps, type = 'text', ...other }) {
  const { control } = useFormContext();
  const { setFile } = useImageFileStore();

  const isNumberType = type === 'number';
  const isFileType = type === 'file';

  const imageRef = useRef(null);

  const setRefs = useImageFileStore((state) => state.setRefs);
  
  useEffect(() => {
    setRefs({
      imageRef,
    });
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          sx={{
            '& .MuiInputLabel-root': {
              color: 'white'
            },
            '& .MuiInputBase-root': {
              backgroundColor: '#394047', // fondo del input
            },
          }}
          inputRef={imageRef}
          {...field}
          fullWidth
          value={isNumberType ? transformValue(field.value) : field.value}
          onChange={(event) => {
            if (isFileType) {
              setFile(event.target.files[0]);
            }
              const transformedValue = isNumberType
                ? transformValueOnChange(event.target.value)
                : event.target.value;
                field.onChange(transformedValue);

          }}
          onBlur={(event) => {
            const transformedValue = isNumberType
              ? transformValueOnBlur(event.target.value)
              : event.target.value;

            field.onChange(transformedValue);
          }}
          type={isNumberType ? 'text' : type}
          error={!!error}
          helperText={error?.message ?? helperText}
          slotProps={{
            sx: {bgColor: 'red'},
            ...slotProps,
            htmlInput: {
              autoComplete: 'off',
              ...slotProps?.htmlInput,
              ...(isNumberType && { inputMode: 'decimal', pattern: '[0-9]*\\.?[0-9]*' }),
            },
          }}
          {...other}
        />
      )}
    />
  );
}
