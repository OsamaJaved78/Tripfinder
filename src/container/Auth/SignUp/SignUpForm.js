import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { MdLockOpen } from "react-icons/md";
import { Input, Switch, Button, Spin , Checkbox} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import FormControl from "components/UI/FormControl/FormControl";
import { AuthContext } from "context/AuthProvider";
import { FieldWrapper, SwitchWrapper, Label } from "../Auth.style";
import axios from 'axios';

export default () => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "#fff" }} spin />
  );

  const[errors,setErrors] = useState('');
    const [user, setUser] = useState({
        name: "",
        email: "",
        password:""
      });
      
      const {name, email,password} = user;
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

      async function  signup()
       {
        let result = await axios.post("http://localhost/projects/admin-bus/api/register",user);
        setErrors('Registration Successful')
        setUser({name:"",email:"",password:""}) // To Clear all fields
 
        }  

  
  const [Loading, setLoading] = useState(false);
  // const { signUp, loggedIn } = useContext(AuthContext);
  const { control, watch,  handleSubmit } = useForm({
    mode: "onChange",
  });
  // const password = watch("password");
  // const confirmPassword = watch("confirmPassword");
  const onSubmit = (data) => {
    setLoading(true);
    signup(data);
  };
  // if (loggedIn) {
  //   return <Redirect to={{ pathname: "/" }} />;
  // }

  return (
    <form >
      <FormControl
        label="First name"
        htmlFor="name"
        error={
          errors.name && (
            <>
              {errors.name?.type === "required" && (
                <span>This field is required!</span>
              )}
            </>
          )
        }
      >

        {/* <Controller
          as={<Input/>}
          id="name"
          name="name"
          value={name}
          // onChange={e => onInputChange(e)}
          // defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
          
          // name="name"
          // // defaultValue=""
        /> */}


        <Controller
        placeholder="AntD Input"
        control={control}
        name="AntdInput"
        render={({ field }) => <Input {...field} />}
      />
      </FormControl>

      
          
      {/* <FormControl
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
      </FormControl> */}

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
        
          <Input 
          type="email"
          // id="email"
          name="email"
          value={email}
          onChange={e => onInputChange(e)}
          defaultValue=""
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
          <Input
          defaultValue=""
          id="password"
          name="password"
          value={password}
          onChange={e => onInputChange(e)}
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
      {/* <FieldWrapper>
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
      </FieldWrapper> */}
      {/* <Button
        className="signin-btn"
        type="primary"
        htmlType="submit"
        size="large"
        onClick={signup}
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
      </Button> */}
      <Button type='submit' onClick={signup} color='primary' >Singup</Button>
    </form>
  );
};
