<?php

namespace App\Controller;

use App\Entity\Drink;
use App\Entity\Rating;
use Doctrine\Persistence\ManagerRegistry;
use JMS\Serializer\Serializer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api", name="api_")
 */
class RatingsController extends AbstractController
{
    /**
     * @Route("/ratings", name="ratings", methods={"GET"})
     */
    public function list(ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();
        $ratingsRepository = $em->getRepository(Rating::class);

        $ratings = $ratingsRepository->findBy(['user' => $this->getUser()], ['date' => 'desc']);
        return $this->json($ratings, Response::HTTP_OK, [], ['groups' => ['main']]);
    }

    /**
     * @Route("/rate", name="rate", methods={"POST"})
     */
    public function add(ManagerRegistry $doctrine, Request $request): Response
    {
        $decoded = json_decode($request->getContent());

        $em = $doctrine->getManager();
        $drinksRepository = $em->getRepository(Drink::class);

        $rating = new Rating();
        $rating->setRating($decoded->rating);
        $rating->setUser($this->getUser());

        if ($drink = $drinksRepository->findOneBy(['name' => $decoded->drink])) {
            $drink->addRating($rating);
        } else {
            $drink = new Drink();
            $drink->setName($decoded->drink);
            $drink->addRating($rating);
        }


        try{
            $em->persist($drink);
            $em->flush();
        } catch (\Exception $e){
            return $this->json(['message' => 'Something went wrong']);
        }

        return $this->json($rating, Response::HTTP_OK, [], ['groups' => ['main']]);
    }
}
