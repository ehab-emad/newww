import { createSlice } from '@reduxjs/toolkit';

let owners = [
  {
    id : 1,
    name: "اسم المستخدم ويمتد لسطرين",
    email: "email@gmail.com",
    phone: "966 123456789",
    registrationDate: "10/15/2024",
    productsCount: "0",
    rentalsCount: "0",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2b4b0680dff15b2c6fcd3dfb8d3a35f3aae415d004bfa31262d56859744012?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
    isVerified: false,
    status: "avtive",
    actions: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9f949aab8509d00cdae4d92a133ceb848eb6a70fb629e9dba82f55cda2b4a18?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        label: "Delete",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f438e4308ba3662c0be66ba34c75dbf34e0e5643f78d9bd6c9b6f608a04ca4a3?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        label: "Message",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97d9a84c48d3c6e49b06e1aa1b4af9a501149c07fb1cdaafbf871599f22d9fa5?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        label: "Edit",
      },
    ],
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
    idCard : [
    ]
  },
  {
    id : 2,
    name: "اسم المستخدم ويمتد لسطرين",
    email: "email@gmail.com",
    phone: "966 123456789",
    registrationDate: "10/15/2024",
    productsCount: "0",
    rentalsCount: "0",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e321f0c04cb12a1a7acdce56c108e95be2f1f81845badb412fcd0e6503c813c7?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
    isVerified: false,
    status: "active",
    actions: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce458a676e153d63be78e14704a1fd8bdfab4ddba596db467a9e8d81dd8c7153?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        label: "Delete",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/34b991417a859eb3fa8a8311b2620af9055703774fedb30310e907e10d9d550d?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        label: "Message",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f247327c313c8c90501813b92e5ef1fe728250a5d64aa64be17e773768825e55?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        label: "Edit",
      },
    ],
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
    idCard : [
      { title: 'الواجهة الخلفية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75b3948c6281e42f8d170057cb97f5af42c04ef32d6e37ff87e88683a04b6c26?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' },
      { title: 'الواجهة الأمامية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f473cbf8bc1c1ea666c7177a2ee4aa26e3fdc223840c556e9e93ae1260a0d284?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' }
    ]
  },
  {
    id : 3,
    name: "اسم المستخدم ويمتد لسطرين",
    email: "email@gmail.com",
    phone: "966 123456789",
    registrationDate: "10/15/2024",
    productsCount: "0",
    rentalsCount: "20",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e321f0c04cb12a1a7acdce56c108e95be2f1f81845badb412fcd0e6503c813c7?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
    isVerified: true,
    status: "active",
    actions: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce458a676e153d63be78e14704a1fd8bdfab4ddba596db467a9e8d81dd8c7153?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        label: "Delete",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/34b991417a859eb3fa8a8311b2620af9055703774fedb30310e907e10d9d550d?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        label: "Message",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f247327c313c8c90501813b92e5ef1fe728250a5d64aa64be17e773768825e55?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        label: "Edit",
      },
    ],
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
    idCard : [
      { title: 'الواجهة الخلفية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75b3948c6281e42f8d170057cb97f5af42c04ef32d6e37ff87e88683a04b6c26?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' },
      { title: 'الواجهة الأمامية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f473cbf8bc1c1ea666c7177a2ee4aa26e3fdc223840c556e9e93ae1260a0d284?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' }
    ]
  },
  {
    id : 4,
    name: "اسم المستخدم ويمتد لسطرين",
    email: "email@gmail.com",
    phone: "966 123456789",
    registrationDate: "10/15/2024",
    productsCount: "0",
    rentalsCount: "0",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e321f0c04cb12a1a7acdce56c108e95be2f1f81845badb412fcd0e6503c813c7?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
    isVerified: false,
    status: "suspended",
    actions: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce458a676e153d63be78e14704a1fd8bdfab4ddba596db467a9e8d81dd8c7153?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        label: "Delete",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/34b991417a859eb3fa8a8311b2620af9055703774fedb30310e907e10d9d550d?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        label: "Message",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f247327c313c8c90501813b92e5ef1fe728250a5d64aa64be17e773768825e55?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16",
        label: "Edit",
      },
    ],
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/988b9681971b56ea8f73884c35050ffaa7c50503f852720e20ccedd472bbd8e9?placeholderIfAbsent=true&apiKey=2e2b2f636cc34221b980cbf747a16fe6",
    idCard : [
      { title: 'الواجهة الخلفية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/75b3948c6281e42f8d170057cb97f5af42c04ef32d6e37ff87e88683a04b6c26?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' },
      { title: 'الواجهة الأمامية', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f473cbf8bc1c1ea666c7177a2ee4aa26e3fdc223840c556e9e93ae1260a0d284?placeholderIfAbsent=true&apiKey=0b9472df8a3343138338e0b5d406ca16' }
    ]
  },
];

const initialState = {
  owners: owners,
};

const ownerSlice = createSlice({
  name: 'cart',
  initialState,
  reducers : {
    ownerVerified: (state, action) => {
      const ownerId = action.payload;
      state.owners = state.owners.map((owner) => {
        if (owner.id === ownerId) {
          return { ...owner, isVerified: !owner.isVerified }; 
        }
        return owner; 
      });
    },
    ownerStatus: (state, action) => {
      const ownerId = action.payload;
      state.owners = state.owners.map((owner) => {
        if (owner.id === ownerId) {
          if (owner.status === "active") {
            return { ...owner, status: "suspended" }
          }else {
            return { ...owner, status: "active" }
          }
        }
        return owner; 
      });
    },
  }
});


export default ownerSlice.reducer;

export const { ownerVerified , ownerStatus} =
  ownerSlice.actions;