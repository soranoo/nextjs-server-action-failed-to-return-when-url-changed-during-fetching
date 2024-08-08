"use server";

export type GetDbDataActionProps = {
  msg: string;
};

export type GetDbDataActionResponse = {
  msg: string;
};

type GetDbDataAction = (props: GetDbDataActionProps) => Promise<GetDbDataActionResponse>;

export const getDbData:GetDbDataAction = async ({msg}) => {
  // Wait 2s
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(`DB: ${msg}`);

  return {
    msg: `DB: ${msg}`,
  }
};
