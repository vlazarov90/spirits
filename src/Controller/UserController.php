<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\User;

/**
 * @Route("/api", name="api_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/register", name="register", methods={"POST"})
     */
    public function register(ManagerRegistry $doctrine, Request $request, UserPasswordHasherInterface $passwordHasher): Response
    {
        $em = $doctrine->getManager();
        $decoded = json_decode($request->getContent());

        $email = $decoded->email;
        $plaintextPassword = $decoded->password;

        $userRepository = $em->getRepository(User::class);

        if ($userRepository->findOneBy(['email' => $email])) {
            return $this->json(['message' => 'User already exists'], 400);
        }
        try {
            $user = new User();
            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $plaintextPassword
            );


            $user->setPassword($hashedPassword);
            $user->setEmail($email);
            $em->persist($user);
            $em->flush();
        } catch (\Exception $e) {
            return $this->json(['message' => "Something went wrong"], 500);
        }


        return $this->json(['message' => 'Registered Successfully']);
    }

    /**
     * @Route("/logout", name="logout", methods={"GET"})
     */
    public function logout()
    {
        $this->getUser()->eraseCredentials();
        return $this->json(['message' => 'Logout was successful']);
    }
}
