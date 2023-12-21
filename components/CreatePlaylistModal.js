"use client";

import uniqid from "uniqid";
import React, { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import useCreatePlaylistModal from '@/hooks/useCreatePlaylistModal';
import { useUser } from "@/hooks/useUser";

import Modal from './Modal';
import Input from './Input';
import Button from './Button';

const CreatePlaylistModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const createPlaylistModal = useCreatePlaylistModal();
    const supabaseClient = useSupabaseClient();
    const { user } = useUser();
    const router = useRouter();
    const { register, handleSubmit, reset } = useForm({
      defaultValues: {
        title: '',
        image: null,
      },
    });
  
    const onChange = (open) => {
      if (!open) {
        reset();
        createPlaylistModal.onClose();
      }
    };
  
    const onSubmit = async (values) => {
      try {
        setIsLoading(true);
  
        const imageFile = values.image?.[0];
  
        if (!imageFile || !user) {
          toast.error('Missing fields');
          return;
        }
  
        const uniqueID = uniqid();
  
        const { data: imageData, error: imageError } = await supabaseClient
          .storage
          .from('playlist-images')
          .upload(`image-${values.title}-${uniqueID}`, imageFile, {
            cacheControl: '3600',
            upsert: false,
          });
  
        if (imageError) {
          setIsLoading(false);
          toast.error('Failed image upload');
          return;
        }
  
        const { error: supabaseError } = await supabaseClient
          .from('playlists')
          .insert({
            user_id: user.id,
            title: values.title,
            image_path: imageData.path,
          });
  
        if (supabaseError) {
          toast.error(supabaseError.message);
          return;
        }
  
        router.refresh();
        setIsLoading(false);
        toast.success('Playlist created!');
        reset();
        createPlaylistModal.onClose();
      } catch (error) {
        toast.error('Something went wrong');
      } finally {
        setIsLoading(false);
      }
     
    };
  
    return (
        <Modal
          title="Create a playlist"
          description="Select a playlist name that is meaningful"
          isOpen={createPlaylistModal.isOpen}
          onChange={onChange}
        >
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="flex flex-col gap-y-4"
          >
            <Input
              id="title"
              disabled={isLoading}
              {...register('title', { required: true })}
              placeholder="playlist name"
            />
            <div>
              <div className="pb-1">
                Select an image
              </div>
              <Input
                placeholder="test" 
                disabled={isLoading}
                type="file"
                accept="image/*"
                id="image"
                {...register('image', { required: true })}
              />
            </div>
            <Button disabled={isLoading} type="submit">
              Create
            </Button>
          </form>
        </Modal>
      );
    }

  export default CreatePlaylistModal;