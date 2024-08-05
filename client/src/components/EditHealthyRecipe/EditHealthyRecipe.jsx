import { PhotoIcon } from '@heroicons/react/24/solid';
import { useParams} from 'react-router-dom';
import { useState } from 'react';
import { useEditRecipe, useGetOneRecipe } from '../../hooks/useRecipes';
import useForm from '../../hooks/useForm';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Preloader from '../Preloader/Preloader';
import EditAlertModal from '../EditAlertModal/EditAlertModal';
import SuccessfullyEditedModal from '../SuccessfullyEditedModal/SuccessfullyEditedModal';

export default function EditHealthyRecipe() {
    const {recipeId} = useParams();

    const [recipe, isFetching] = useGetOneRecipe(recipeId);

    const [errors, editRecipeHandler] = useEditRecipe();
    
    const [isEditAlertModalOpen, setisEditAlertModalOpen] = useState(false);
    const [isEditSuccessfullyModalOpen, setIsEditSuccessfullyModalOpen] = useState(false)
    
    const openEditAlertModal = () => setisEditAlertModalOpen(true)
    const closeEditAlertModal = () => setisEditAlertModalOpen(false);
    
    const openSuccessfullyEditedModal = () => setIsEditSuccessfullyModalOpen(true)
    const closeSuccessfullyEditedModal = () => setIsEditSuccessfullyModalOpen(false);
    
    const editRecipeCallback = async (formData) => {
        const success = await editRecipeHandler(recipeId, formData);

        if(success) {
            closeEditAlertModal();
            openSuccessfullyEditedModal();
        }
    }

    const {formData, onChangeHandler, onSubmitHandler} = useForm(recipe, editRecipeCallback)

    return (
        <>
        {isFetching && <Preloader />}

        <Breadcrumb title="Edit Healthy High Protein Recipe" page="Edit Healthy High Protein Recipe" breadcrumbImage="img/recipe-bg2.jpg"/>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-neutral-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Edit Healthy High Protein Recipe
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="text-red-600">{errors ? errors.serverError : ''}</p>
          <form className="space-y-6" onSubmit={onSubmitHandler}>
            <div>
              <label htmlFor="username" className="block text-sm font-bold leading-6 text-white">
                Recipe Title
              </label>
              <div className="mt-2">
                <p className="text-red-600">{errors ? errors.title : ''}</p>
                <input
                  id="Title"
                  name="title"
                  placeholder="Example: Banana Pancakes"
                  className={`p-2 block w-full rounded-md border-2 ${errors.title ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  onChange={onChangeHandler}
                  value={formData.title}
                />
              </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-bold leading-6 text-white">
                SubTitle
              </label>
              <div className="mt-2">
                <p className="text-red-600">{errors ? errors.subTitle : ''}</p>
                <input
                  id="subTitle"
                  name="subTitle"
                  placeholder="Example: Banana Pancakes"
                  className={`p-2 block w-full rounded-md border-2 ${errors.subTitle ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  onChange={onChangeHandler}
                  value={formData.subTitle}
                />
              </div>
            </div>

            <div className="w-96">
                <div className="relative w-full min-w-[200px]">
                    <label
                      className=" left-0 -top-1.5 flex h-full w-full select-none text-[15px] font-bold leading-tight text-white  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Description
                    </label>
                    <p className="text-red-600">{errors ? errors.description : ''}</p>
                    <textarea
                      className={`peer h-full min-h-[100px] w-full resize-none rounded-[7px] border-2 ${errors.description ? 'border-red-600' : 'border-gray-300'} border-blue-gray-200 border-t-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50`}
                      name='description'
                      onChange={onChangeHandler}
                      value={formData.description}
                    />
                </div>
            </div>

            <div className="w-96">
                <div className="relative w-full min-w-[200px]">
                    <label
                      className=" left-0 -top-1.5 flex h-full w-full select-none text-[15px] font-bold leading-tight text-white  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Ingredients
                    </label>
                    <p className="text-red-600">{errors ? errors.ingredients : ''}</p>
                    <textarea
                      className={`peer h-full min-h-[100px] w-full resize-none rounded-[7px] ${errors.ingredients ? 'border-red-600' : 'border-gray-300'} border-2 border-blue-gray-200 border-t-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50`}
                      placeholder='Example: 200g Oats, 2 Eggs...'
                      name='ingredients'
                      onChange={onChangeHandler}
                      value={formData.ingredients}
                    />
                </div>
            </div>

            <div className="w-96">
                <div className="relative w-full min-w-[200px]">
                    <label
                      className="left-0 -top-1.5 flex h-full w-full select-none text-[15px] font-bold leading-tight text-white  peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Instructions
                    </label>
                    <p className="text-red-600">{errors ? errors.instructions : ''}</p>
                    <textarea
                      className={`peer h-full min-h-[100px] w-full resize-none rounded-[7px] border-2 ${errors.instructions ? 'border-red-600' : 'border-gray-300'} border-blue-gray-200 border-t-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-black outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50`}
                      placeholder='Example: Peel the banana and discard skin. Add the banana, cracked eggs and protein powder...' 
                      name='instructions'
                      onChange={onChangeHandler}
                      value={formData.instructions}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="photo" className="block text-sm font-bold leading-6 text-white">
                  Image Url
                </label>
                <p className="text-red-600">{errors ? errors.imageUrl : ''}</p>
                <div className="mt-2 flex items-center gap-x-3">
                  <PhotoIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                  <input
                    id="imageUrl"
                    name="imageUrl"
                    placeholder="Write image Url"
                    className={`p-2 block w-full rounded-md border-2 ${errors.imageUrl ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    onChange={onChangeHandler}
                    value={formData.imageUrl}
                  />
                </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={openEditAlertModal}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

        <EditAlertModal 
            isOpen={isEditAlertModalOpen}
            onClose={closeEditAlertModal}
            onConfirm={editRecipeCallback}
            itemTitle={recipe.title}
            errorMessage={errors && errors.serverError}
        />

        <SuccessfullyEditedModal 
            isOpen={isEditSuccessfullyModalOpen}
            onClose={closeSuccessfullyEditedModal}
            link={`/healthy-recipes/${recipeId}/details`}
        />

      </>
    );
};