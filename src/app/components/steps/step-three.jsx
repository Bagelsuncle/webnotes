import React from "react";

const StepThree = () => {
  return (
    <div className="bg-zinc-200 w-max p-5 shadow-md rounded-xl my-2">
      <h1 className="text-lg font-semibold">Step 3: Deploy with Vercel</h1>
      <ol className="list-decimal pl-5">
        <li>Open Vercel and Deploy</li>
        <li>Create New Next Project</li>
        <li>Import/connect to GitHub Project</li>
        <li>Click Deploy in Vercel</li>
        <li>Vercel Website is now ready</li>
        <li>
          To connect a custom domain add the vercel provided "A" and "CNAME"
          record to your domain provider
        </li>
        <li>any new "git push will update github and vercel</li>
      </ol>
    </div>
  );
};

export default StepThree;
