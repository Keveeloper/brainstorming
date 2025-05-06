import { Controller, useFormContext } from 'react-hook-form';
import { transformValue, transformValueOnBlur, transformValueOnChange } from 'minimal-shared/utils';

import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

export function RHFImage({ name, helperText, slotProps, type = 'text', ...other }) {
    const { control } = useFormContext();

    const isNumberType = type === 'number';
    const isFileType = type === 'file';

    return (
        <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
            <TextField
            {...field}
            fullWidth
            value={isFileType ? undefined : (isNumberType ? transformValue(field.value) : field.value)}
            onChange={(event) => {
                if (isFileType) {
                    const file = event.target.files?.[0];
                    field.onChange(file); // Guardar solo el archivo
                } else {
                    const transformedValue = isNumberType
                        ? transformValueOnChange(event.target.value)
                        : event.target.value;

                field.onChange(transformedValue);
                }
            }}
            onBlur={(event) => {
                if (!isFileType) {
                const transformedValue = isNumberType
                    ? transformValueOnBlur(event.target.value)
                    : event.target.value;

                field.onChange(transformedValue);
                }
            }}
            type={isNumberType ? 'text' : type}
            error={!!error}
            helperText={error?.message ?? helperText}
            slotProps={{
                ...slotProps,
                htmlInput: {
                autoComplete: 'off',
                ...slotProps?.htmlInput,
                ...(isNumberType && { inputMode: 'decimal', pattern: '[0-9]*\\.?[0-9]*' }),
                ...(isFileType && { accept: other.inputProps?.accept || 'image/*' }),
                },
            }}
            inputProps={other.inputProps} // necesario para pasar props como `accept`
            {...other}
            />
        )}
        />
    );
}
