import clsx from 'clsx';

interface PageTitleProps {
  title: string;
  classname?: string;
}

const PageTitle = ({ title, classname }: PageTitleProps) => {
  return (
    <h2
      className={clsx(
        'text-3xl font-bold text-gray-800 mb-10 mt-5 md:mt-0',
        classname
      )}
    >
      {title}
    </h2>
  );
};

export default PageTitle;
