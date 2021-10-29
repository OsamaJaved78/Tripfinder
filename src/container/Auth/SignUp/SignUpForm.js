import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { MdLockOpen } from "react-icons/md";
import { Input, Switch, Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import FormControl from "components/UI/FormControl/FormControl";
import { AuthContext } from "context/AuthProvider";
import { FieldWrapper, SwitchWrapper, Label } from "../Auth.style";

export default () => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "#fff" }} spin />
  );
  const [Loading, setLoading] = useState(false);
  const { signUp, loggedIn } = useContext(AuthContext);
  const { control, watch, errors, handleSubmit } = useForm({
    mode: "onChange",
  });
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const onSubmit = (data) => {
    setLoading(true);
    signUp(data);
  };
  if (loggedIn) {
    return <Redirect to={{ pathname: "/" }} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        label="First name"
        htmlFor="firstname"
        error={
          errors.firstname && (
            <>
              {errors.firstname?.type === "required" && (
                <span>This field is required!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input />}
          id="firstname"
          name="firstname"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
        />
      </FormControl>
      <FormControl
        label="Last name"
        htmlFor="lastname"
        error={
          errors.lastname && (
            <>
              {errors.lastname?.type === "required" && (
                <span>This field is required!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input />}
          id="lastname"
          name="lastname"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
        />
      </FormControl>

      <FormControl
        label="Email"
        htmlFor="email"
        error={
          errors.email && (
            <>
              {errors.email?.type === "required" && (
                <span>This field is required!</span>
              )}
              {errors.email?.type === "pattern" && (
                <span>Please enter a valid email address!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input />}
          type="email"
          id="email"
          name="email"
          defaultValue=""
          control={control}
          rules={{
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          }}
        />
      </FormControl>
      <FormControl
        label="Password"
        htmlFor="password"
        error={
          errors.password && (
            <>
              {errors.password?.type === "required" && (
                <span>This field is required!</span>
              )}
              {errors.password?.type === "minLength" && (
                <span>Password must be at lest 6 characters!</span>
              )}
              {errors.password?.type === "maxLength" && (
                <span>Password must not be longer than 20 characters!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input.Password />}
          defaultValue=""
          control={control}
          id="password"
          name="password"
          rules={{ required: true, minLength: 6, maxLength: 20 }}
        />
      </FormControl>
      {/* <FormControl
        label="Confirm password"
        htmlFor="confirmPassword"
        error={
          confirmPassword &&
          password !== confirmPassword && (
            <span>Your password is not same!</span>
          )
        }
      >
        <Controller
          as={<Input.Password />}
          defaultValue=""
          control={control}
          id="confirmPassword"
          name="confirmPassword"
        />
      </FormControl> */}
      <FieldWrapper>
        <SwitchWrapper>
          <Controller
            as={<Switch />}
            name="rememberMe"
            defaultValue={false}
            valueName="checked"
            control={control}
          />
          <Label>Remember Me</Label>
        </SwitchWrapper>
        <SwitchWrapper>
          <Controller
            as={<Switch />}
            name="termsAndConditions"
            defaultValue={false}
            valueName="checked"
            control={control}
          />
          <Label>I agree with terms and conditions</Label>
        </SwitchWrapper>
      </FieldWrapper>
      <Button
        className="signin-btn"
        type="primary"
        htmlType="submit"
        size="large"
        style={{ width: "100%" }}
      >
        {!Loading ? (
          <>
            <MdLockOpen />
            Register
          </>
        ) : (
          <>
            <Spin indicator={antIcon} />
          </>
        )}
      </Button>
    </form>
  );
};
