import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { RoleType } from 'models/role'

export interface CreateUpdateRoleFields {
  name: string
}

interface Props {
  defaultValues?: RoleType
}

export const useCreateUpdateRoleForm = ({ defaultValues }: Props) => {
  const CreateUpdateRoleSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    permissions: Yup.array().min(1),
  })

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    register,
  } = useForm({
    defaultValues: {
      name: '',
      permissions: [],
      ...defaultValues,
    },
    mode: 'onSubmit',
    resolver: yupResolver(CreateUpdateRoleSchema),
  })

  return {
    handleSubmit,
    errors,
    reset,
    control,
    register,
  }
}

export type CreateUpdateRoleForm = ReturnType<typeof useCreateUpdateRoleForm>
