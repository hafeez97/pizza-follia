import * as React from "react";
import propTypes from 'prop-types';
import {
    Controller,
} from "react-hook-form";
import TextField from "@mui/material/TextField";

const TextFieldComponent = (props) => {
    return (
        <div>
            <Controller
                name={props.name}
                control={props.control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label={props.label}
                        variant="outlined"
                        size={"small"}
                        margin={"normal"}
                        fullWidth
                        type={props.type || "text"}
                        disabled={props.disabled}
                        color={props?.errors?.message ? "secondary" : "primary"}
                        error={props?.errors?.message == undefined ? false : true}
                        helperText={
                            props?.errors?.message
                                ? props?.errors?.message
                                : props.helperText
                        }
                    />
                )}
            />
        </div>
    );
};

TextFieldComponent.propTypes = {
    errors : propTypes.any,
    label: propTypes.string,
    color:propTypes.string,
    variant: propTypes.string,
    name:propTypes.string,
    control: propTypes.any,
    helperText:propTypes.string,
    type: propTypes.string
}

export default TextFieldComponent;